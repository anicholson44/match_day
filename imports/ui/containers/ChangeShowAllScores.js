import { connect } from 'react-redux';
import ChangeShowScore from './ChangeShowScore';

const makeMapStateToProps = () => {
  const hideScoreLabel = 'Hide All Scores';
  const showScoreLabel = 'Show All Scores';
  const id = 'all';
  return ({showScores}) => ({
    scoreShown: showScores.all,
    hideScoreLabel,
    showScoreLabel,
    id
  });
};

export default connect(makeMapStateToProps)(ChangeShowScore);
