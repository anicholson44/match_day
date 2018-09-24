import './main.html';
import 'semantic-ui-css/semantic.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {
  fetchCompetitions,
  fetchMatches
} from '../imports/actions';
import { createStore, initialState } from '../imports/store';
import App from '../imports/ui/App';

Meteor.startup(() => {
  const store = createStore(initialState);
  const { dispatch, getState } = store;
  dispatch(fetchCompetitions);
  dispatch(fetchMatches(getState()));
  const app = <Provider store={store}>
    <App />
  </Provider>;
  render(app, document.getElementById('render-target'));
});
