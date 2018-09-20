import { fetchMatches } from '../services/fetchData';

const wrapWithFetchMatches = (actionCreator) => (payload) =>
  (dispatch, getState) => {
    const state = getState();
    return fetchMatches({...state, ...payload}).then((matches) => (
      dispatch(actionCreator({...payload, matches}))
    ))
  };

export const updateSelectCompetitions = wrapWithFetchMatches((payload) => ({
  type: 'UPDATE_SELECTED_COMPETITIONS',
  payload
}));

export const changeDates =  wrapWithFetchMatches((payload) => ({
  type: 'CHANGE_DATES',
  payload
}));

export const changeShowScore = (payload) => ({
  type: 'CHANGE_SHOW_SCORE',
  payload
});
