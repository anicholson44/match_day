import arrayToObject from './arrayToObject';
import formatDate from './formatDate';

// TODO: move to server-side and secure apiKey
const apiKey = '64ea00257ef94c51ae6bcd8ccd27a857';
const baseUrl = 'http://api.football-data.org/v2/';
const defaultFetchOptions = {
  mode: 'cors',
  headers: {
    'X-Auth-Token': apiKey
  }
};

export const fetchCompetitions = () =>
  fetch(baseUrl + 'competitions', defaultFetchOptions)
    .then((response) => response.json())
    .then(({ competitions }) => arrayToObject(competitions));

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

export const fetchMatches = ({ selectedCompetitions = [], startDate = new Date(), endDate = new Date() }) => {
  const queryString = [
    `competitions=${selectedCompetitions.join(',')}`,
    `dateFrom=${formatDate(startDate)}`,
    `dateTo=${formatDate(endDate)}`
  ].join('&');
  return fetch(
    baseUrl + 'matches?' + queryString,
    defaultFetchOptions).then((response) => response.json())
    .then(transformMatchesResponse);
};
