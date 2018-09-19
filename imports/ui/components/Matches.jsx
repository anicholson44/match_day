import React from 'react';
import Match from '../containers/Match';

const Matches = ({ matches }) =>
  <>
    {matches ? Object.values(matches).map((match) => <Match key={match.id} {...match} />) : null}
  </>;

export default Matches;
