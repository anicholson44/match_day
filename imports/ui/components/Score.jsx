import React from 'react';
import T from 'prop-types';
import { Grid } from 'semantic-ui-react';
import ChangeShowScore from '../containers/ChangeShowScore';

const scorePropType = T.oneOfType([T.string, T.number]);

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

ViewableScore.propTypes = {
  homeTeam: scorePropType.isRequired,
  awayTeam: scorePropType.isRequired,
  id: T.oneOfType([T.string, T.number]).isRequired
};

const HiddenScore = ({ id }) =>
  <ChangeShowScore id={id} />;

HiddenScore.propTypes = {
  id: T.oneOfType([T.string, T.number]).isRequired
};

const ScoreComponent = (showScore) => showScore ? ViewableScore : HiddenScore;

const Score = ({ showScore, score, id }) =>
  React.createElement(ScoreComponent(showScore), { ...score, id });

Score.propTypes = {
  score: T.shape({
    homeTeam: scorePropType.isRequired,
    awayTeam: scorePropType.isRequired
  }),
  id: T.oneOfType([T.string, T.number]).isRequired
};

export default Score;
