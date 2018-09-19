import './main.html';
import 'semantic-ui-css/semantic.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { fetchCompetitions } from '../imports/services/fetchData';
import { createStore } from '../imports/store';
import App from '../imports/ui/App';

Meteor.startup(() => {
  fetchCompetitions().then((competitions) => {
    const app = <Provider store={createStore({competitions})}>
      <App />
    </Provider>;
    render(app, document.getElementById('render-target'));
  });
});
