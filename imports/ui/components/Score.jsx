import React from 'react';
import T from 'prop-types';
import { Grid } from 'semantic-ui-react';
import ChangeShowScore from '../containers/ChangeShowScore';

const ViewableScore = ({ homeTeam, awayTeam, id }) =>
  <>
    <Grid.Column>
      {homeTeam}
    </Grid.Column>
    <Grid.Column textAlign='center'>
      <ChangeShowScore scoreShown id={id} />
    </Grid.Column>
    <Grid.Column>
      {awayTeam}
    </Grid.Column>
  </>;

const HiddenScore = ({ id }) =>
  <ChangeShowScore id={id} />;

const ScoreComponent = (showScore) => showScore ? ViewableScore : HiddenScore;

const Score = ({ showScore, ...score }) =>
  React.createElement(ScoreComponent(showScore), { ...score });

const scorePropType = T.oneOfType([T.string, T.number]);

Score.propTypes = {
  homeTeam: scorePropType,
  awayTeam: scorePropType,
  id: T.oneOfType([T.string, T.number]).isRequired
};

export default Score;
