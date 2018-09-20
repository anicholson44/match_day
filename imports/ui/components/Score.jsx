import React from 'react';
import { Grid } from 'semantic-ui-react';
import ChangeShowScore from '../containers/ChangeShowScore';

const ViewableScore = ({homeTeam, awayTeam, id}) =>
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

const HiddenScore = ({id}) =>
  <ChangeShowScore id={id}/>;

const ScoreComponent = (showScore) => showScore ? ViewableScore : HiddenScore;

const Score = ({ showScore, score, ...other }) =>
  React.createElement(ScoreComponent(showScore), { ...score, ...other });

export default Score;
