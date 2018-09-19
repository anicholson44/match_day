import { createStore as reduxCreateStore } from 'redux';
import reducer from '../reducers';

export const initialState = {
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

export const createStore = (state = {}) => reduxCreateStore(
  reducer,
  { ...initialState, ...state },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
