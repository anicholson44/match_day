import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Matches from '../components/Matches';
import arrayToObject from '../../services/arrayToObject';

// TODO: sort by order of selected competitions and time of match
const makeMapStateToProps = () => {
  const getMatchesByDateAndCompetition = createSelector(
    ({ matches }) => matches,
    (matchesObject) => {
      const matches = Object.values(matchesObject);
      const matchesByDateAndCompetition = arrayToObject(
        matches.map(
          ({ date }) => date), {
          makeValue: () =>
            arrayToObject(matches.map(({ competition }) => competition), {
              makeValue: () => []
            })
        }
      );
      return matches.reduce((o, match) => {
        o[match.date][match.competition].push(match);
        return o;
      }, matchesByDateAndCompetition);
    }
  );
  return (state) => ({
    matches: getMatchesByDateAndCompetition(state),
    competitions: state.competitions
  });
};

export default connect(makeMapStateToProps)(Matches);
