import { key as dateRangeKey } from '../ui/containers/DateRange';

export const updateSelectCompetitions = (payload) => ({
  type: 'UPDATE_SELECTED_COMPETITIONS',
  payload
});

export const changeDates = (dates) => ({
  type: 'CHANGE_DATES',
  payload: dates[dateRangeKey]
});

export const changeShowScore = (payload) => ({
  type: 'CHANGE_SHOW_SCORE',
  payload
});
