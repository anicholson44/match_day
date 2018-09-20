import React from 'react';
import T from 'prop-types';
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

CompetitionsDropdown.propTypes = {
  competitions: T.arrayOf(T.shape({
    text: T.string.isRequired,
    value: T.oneOfType([T.string, T.number]).isRequired
  })).isRequired,
  selectedCompetitions: T.arrayOf(T.number).isRequired,
  onSelect: T.func.isRequired
};

export default CompetitionsDropdown;
