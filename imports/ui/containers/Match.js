import { connect } from 'react-redux';
import Match from '../components/Match';

const mapStateToProps = ({ showScores }, { id }) => ({
  showScore: showScores[id] !== false && (showScores.all || showScores[id])
});

const MatchContainer = connect(mapStateToProps, undefined)(Match);

MatchContainer.propTypes = Match.propTypes;

export default MatchContainer;
