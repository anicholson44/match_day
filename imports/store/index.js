import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export const initialState = {
  competitions: {},
  matches: {},
  selectedCompetitions: [
    2021,
    2014,
    2002,
    2015,
    2019
  ],
  startDate: new Date(),
  endDate: new Date(),
  showScores: {}
};

export const createStore = (state = {}) =>
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(reduxCreateStore)(reducer, { ...initialState, ...state });
