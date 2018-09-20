import React from 'react';
import T from 'prop-types';
import Match from '../containers/Match';

// TODO: organize under competition
const Matches = ({ matches }) =>
  <>
    {matches ? Object.values(matches).map((match) => <Match key={match.id} {...match} />) : null}
  </>;

Matches.propTypes = {
  matches: T.shape(Match.propTypes)
};

export default Matches;
