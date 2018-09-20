import React from 'react';
import Match from '../containers/Match';


// TODO: organize under competition
const Matches = ({ matches }) =>
  <>
    {matches ? Object.values(matches).map((match) => <Match key={match.id} {...match} />) : null}
  </>;

export default Matches;
