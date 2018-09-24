import React from 'react';
import T from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import Match from '../containers/Match';

const segments = ({ matches, competitions }) => Object.entries(matches).map(([day, matchesOfDay]) => (
  <Segment key={day}>
    <Header as='h4'>{day}</Header>
    {Object.entries(matchesOfDay)
      .map(([competition, matchesOfCompetition]) => (
        <Segment key={`${day}-${competition}`}>
          <Header as='h5'>{competitions[competition].name}</Header>
          {matchesOfCompetition.map((match) => <Match
            key={match.id} {...match} />)}
        </Segment>
      ))}
  </Segment>
));

const Matches = (props) =>
  <>
    {segments(props)}
  </>;

// `matches` is an object with keys which are match days, and for each match day
// an object with keys which are competitions, and for each competition an array
// of props for a `Match`
Matches.propTypes = {
  matches: T.objectOf(
    T.objectOf(
      T.arrayOf(
        T.shape(
          Match.propTypes
        )
      )
    )
  )
};

export default Matches;
