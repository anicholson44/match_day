import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Segment,
  Header,
  Grid,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import CompetitionsDropdown from './containers/CompetitionsDropdown';
import DateRange from './containers/DateRange';
import Matches from './containers/Matches';
import ChangeShowAllScores from './containers/ChangeShowAllScores';

const mapStateToProps = ({ showDimmer }) => ({ showDimmer });

const App = ({ showDimmer }) => (
  <Dimmer.Dimmable as={(props) => <div {...props} />} dimmed={showDimmer}>
    <Dimmer simple active={showDimmer} />
    <Container>
      <Segment>
        <Header as='h2'>Competitions</Header>
        <CompetitionsDropdown />
      </Segment>
      <Segment>
        <Loader size='massive' active={showDimmer}>
          Loading...
        </Loader>
        <Header as='h2'>Dates</Header>
        <DateRange />
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
  </Dimmer.Dimmable>
);

export default connect(mapStateToProps)(App);
