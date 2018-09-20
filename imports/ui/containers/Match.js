import { connect } from 'react-redux';
import Match from '../components/Match';

const mapStateToProps = ({ showScores }, { id }) => ({
  showScore: showScores[id] !== false && (showScores.all || showScores[id])
});

export default connect(mapStateToProps, undefined)(Match);
