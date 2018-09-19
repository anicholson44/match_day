import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Checkbox } from 'semantic-ui-react';
import { changeShowScore as onShowScoreChange } from '../../actions';

const mapDispatchToProps = (dispatch) => bindActionCreators({ onShowScoreChange }, dispatch);

const ChangeShowScore = ({
                           key,
                           scoreShown,
                           onShowScoreChange,
                           showScoreLabel = 'Show Score',
                           hideScoreLabel = 'Hide Score'
                         }) =>
  <Checkbox label={scoreShown ? hideScoreLabel : showScoreLabel}
            onChange={(_, { value }) => onShowScoreChange({ key, value })} />;

export default connect(undefined, mapDispatchToProps)(ChangeShowScore);
