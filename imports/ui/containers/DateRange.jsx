import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateRangePicker } from 'react-date-range';

import { changeDates as onChange } from '../../actions';

const mapStateToProps = ({ startDate, endDate }) => ({ startDate, endDate });

const mapDispatchToProps = (dispatch) => bindActionCreators({ onChange }, dispatch);

export const key = 'selection';

const DateRangePickerWrapper = ({ startDate = new Date(), endDate = new Date(), ...other }) =>
  <DateRangePicker ranges={[{startDate, endDate, key}]} {...other} />;

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerWrapper);
