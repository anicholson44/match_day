import React from 'react';
import T from 'prop-types';
import { Card } from 'semantic-ui-react';

const Team = ({ name }) =>
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>;

Team.propTypes = {
  name: T.string.isRequired
};

export default Team;
