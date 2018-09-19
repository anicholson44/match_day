import arrayToObject from './arrayToObject';

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
    .then(({competitions}) => arrayToObject(competitions));
