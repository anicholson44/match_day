import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Score from './Score';
import Team from './Team';

const Match = ({ showScore, homeTeam, awayTeam, ...score }) => (
  <Segment>
    <Grid centered columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Team name={homeTeam} />
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>
          <Team name={awayTeam} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Score {...score} showScore={showScore} />
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Match;
