import {
  fetchCompetitionsWithDimmer,
  fetchMatchesWithDimmer
} from '../services/fetchData';

const wrapWithFetchMatches = (actionCreator) => (payload) =>
  (dispatch, getState) => {
    const state = getState();
    return dispatch(fetchMatchesWithDimmer({ ...state, ...payload }))
      .then((matches) => dispatch(actionCreator({ ...payload, matches })))
  };

export const updateSelectCompetitions = wrapWithFetchMatches((payload) => ({
  type: 'UPDATE_SELECTED_COMPETITIONS',
  payload
}));

export const changeDates = wrapWithFetchMatches((payload) => ({
  type: 'CHANGE_DATES',
  payload
}));

export const changeShowScore = (payload) => ({
  type: 'CHANGE_SHOW_SCORE',
  payload
});

export const showDimmer = {
  type: 'SHOW_DIMMER'
};

export const hideDimmer = {
  type: 'HIDE_DIMMER'
};

export const fetchMatches = (filters) =>
  (dispatch) =>
    dispatch(fetchMatchesWithDimmer(filters))
      .then((matches) => dispatch({
        type: 'SET_MATCHES',
        payload: matches
      }));

export const fetchCompetitions = (dispatch) =>
  dispatch(fetchCompetitionsWithDimmer)
    .then((competitions) => dispatch({
      type: 'SET_COMPETITIONS',
      payload: competitions
    }));
