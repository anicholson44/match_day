import React from 'react';
import { Card } from 'semantic-ui-react';

const Team = ({ name }) =>
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
    </Card.Content>
  </Card>;

export default Team;
