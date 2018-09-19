import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CompetitionsDropdown = ({competitions, onSelect, selectedCompetitions}) => (
  <Dropdown
    options={competitions}
    selection
    search
    onChange={onSelect}
    multiple
    value={selectedCompetitions}
  />
);

export default CompetitionsDropdown;
