import { createStore as reduxCreateStore } from 'redux';
import reducer from '../reducers';

const initialCompetitions = [
  2021,
  2014,
  2002,
  2015,
  2019
];

export const createStore = (state = {}) => reduxCreateStore(
  reducer,
  { ...state, selectedCompetitions: initialCompetitions },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
