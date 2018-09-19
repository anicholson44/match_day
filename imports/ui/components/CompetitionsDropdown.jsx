import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default ({competitions, onSelect, selectedCompetitions}) => (
  <Dropdown
    options={competitions}
    selection
    search
    onChange={onSelect}
    multiple
    value={selectedCompetitions}
  />
);
