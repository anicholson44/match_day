import { connect } from 'react-redux';

import { updateSelectCompetitions } from '../../actions';
import CompetitionsDropdown from '../components/CompetitionsDropdown';

const mapStateToProps = ({ competitions, selectedCompetitions }) =>
  ({
    competitions: Object.values(competitions).map(({ id, name }) => ({
      text: name,
      value: id
    })),
    selectedCompetitions
  });

const mapDispatchToProps = (dispatch) => ({
  onSelect: (_, { value: selectedCompetitions }) =>
    dispatch(updateSelectCompetitions({ selectedCompetitions }))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsDropdown);
