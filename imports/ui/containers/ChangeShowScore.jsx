import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';
import { changeShowScore } from '../../actions';

const mapDispatchToProps = (dispatch, { id }) => ({
  onShowScoreChange: (value) => dispatch(changeShowScore({id, value}))
});

const ChangeShowScore = ({
                           scoreShown,
                           onShowScoreChange,
                           showScoreLabel = 'Show Score',
                           hideScoreLabel = 'Hide Score'
                         }) =>
  <Checkbox label={scoreShown ? hideScoreLabel : showScoreLabel}
            checked={scoreShown}
            onChange={(_, { checked }) => onShowScoreChange(checked)} />;

export default connect(undefined, mapDispatchToProps)(ChangeShowScore);
