import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-date-range';

import { changeDates } from '../../actions';

const mapStateToProps = ({ startDate, endDate }) => ({ startDate, endDate });

const key = 'selection';

const mapDispatchToProps = (dispatch) => ({
  onChange: (dates) => dispatch(changeDates({
    startDate: dates[key].startDate,
    endDate: dates[key].endDate
  }))
});

const DateRangePickerWrapper = ({ startDate = new Date(), endDate = new Date(), ...other }) =>
  <DateRangePicker ranges={[{startDate, endDate, key}]} {...other} />;

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePickerWrapper);
