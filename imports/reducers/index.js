export default (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED_COMPETITIONS':
      const { selectedCompetitions } = action.payload;
      return { ...state, selectedCompetitions };
    case 'CHANGE_DATES':
      const { startDate, endDate } = action.payload;
      return { ...state, startDate, endDate };
    default:
      return state;
  }
}
