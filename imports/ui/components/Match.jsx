import React from 'react';
import T from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import Score from './Score';
import Team from './Team';

// TODO: display date
// TODO: only render Score for matches that have a score
const Match = ({ homeTeam, awayTeam, ...score }) => (
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
        <Score {...score} />
      </Grid.Row>
    </Grid>
  </Segment>
);

Match.propTypes = {
  showScore: T.bool,
  homeTeam: T.string.isRequired,
  awayTeam: T.string.isRequired,
  ...Score.propTypes
};

export default Match;
