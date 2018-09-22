import arrayToObject from './arrayToObject';
import formatDate from './formatDate';
import { showDimmer, hideDimmer } from '../actions';

// TODO: move to server-side and secure apiKey
const apiKey = '64ea00257ef94c51ae6bcd8ccd27a857';
const baseUrl = 'http://api.football-data.org/v2/';

const fetchFromApi = (url) =>
  fetch(url, { mode: 'cors', headers: { 'X-Auth-Token': apiKey } })
    .then((response) => response.json());

const fetchWithDimmer = (url) =>
  (dispatch) => {
    dispatch(showDimmer);
    return fetchFromApi(url)
      .then((response) => {
        dispatch(hideDimmer);
        return response;
      })
      .catch((error) => {
        console.error(error);
        dispatch(hideDimmer);
        return error;
      })
  };

const fetchCompetitions = (fetchFunction) =>
  fetchFunction(baseUrl + 'competitions')
    .then(({ competitions }) => arrayToObject(competitions));

export const fetchCompetitionsWithDimmer = (dispatch) =>
  fetchCompetitions((url) => dispatch(fetchWithDimmer(url)));

export const fetchCompetitionsInit = () =>
  fetchCompetitions(fetchFromApi);

const fetchMatches = ({ selectedCompetitions = [], startDate = new Date(), endDate = new Date() }, fetchFunction) => {
  const queryString = [
    `competitions=${selectedCompetitions.join(',')}`,
    `dateFrom=${formatDate(startDate)}`,
    `dateTo=${formatDate(endDate)}`
  ].join('&');
  return fetchFunction(
    baseUrl + 'matches?' + queryString)
    .then(transformMatchesResponse);
};

export const fetchMatchesInit = (filters) =>
  fetchMatches(filters, fetchFromApi);

export const fetchMatchesWithDimmer = (filters) => (dispatch) =>
  fetchMatches(filters, (url) => dispatch(fetchWithDimmer(url)));

// Raw score looks like the following:
// "score": {
//   "winner": "AWAY_TEAM",
//     "duration": "REGULAR",
//     "fullTime": {
//     "homeTeam": 0,
//       "awayTeam": 1
//   },
//   "halfTime": {
//     "homeTeam": 0,
//       "awayTeam": 1
//   },
//   "extraTime": {
//     "homeTeam": null,
//       "awayTeam": null
//   },
//   "penalties": {
//     "homeTeam": null,
//       "awayTeam": null
//   }
// }
const getFinalScore = (rawScore) => ((periods) => (
  periods.reduce((score, period) => {
    if (rawScore[period]['homeTeam']) {
      return rawScore[period];
    } else return score;
  }, null)
))(['halfTime', 'fullTime', 'extraTime', 'penalties']);

const transformMatchesResponse = ({ matches }) =>
  arrayToObject(matches.map((match) => {
    // TODO: add goals, lineups, bookings, etc.
    const {
      id,
      competition,
      utcDate,
      homeTeam,
      awayTeam,
      score
    } = match;
    return {
      id,
      competition: competition.id,
      utcDate,
      homeTeam: homeTeam.name,
      awayTeam: awayTeam.name,
      score: getFinalScore(score)
    }
  }));
