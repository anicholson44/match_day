import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';

import CompetitionsDropdown from './containers/CompetitionsDropdown';
import DateRange from './containers/DateRange';

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
      <Header as='h2'>Matches</Header>
    </Segment>
  </Container>
);
