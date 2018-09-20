import React from 'react';
import { Container, Segment, Header, Grid } from 'semantic-ui-react';

import CompetitionsDropdown from './containers/CompetitionsDropdown';
import DateRange from './containers/DateRange';
import Matches from './containers/Matches';
import ChangeShowAllScores from './containers/ChangeShowAllScores';

export default () => (
  <Container>
    <Segment>
      <Header as='h2'>Competitions</Header>
      <CompetitionsDropdown/>
    </Segment>
    <Segment>
      <Header as='h2'>Dates</Header>
      <DateRange/>
    </Segment>
    <Segment>
      <Grid columns={2}>
        <Grid.Column>
          <Header as='h2'>Matches</Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <ChangeShowAllScores />
        </Grid.Column>
      </Grid>
      <Matches />
    </Segment>
  </Container>
);
