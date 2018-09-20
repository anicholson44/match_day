// TODO: break into multiple reducers
export default (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED_COMPETITIONS': {
      const { selectedCompetitions, matches } = action.payload;
      return { ...state, selectedCompetitions, matches };
    }
    case 'CHANGE_DATES': {
      const { startDate, endDate, matches } = action.payload;
      return { ...state, startDate, endDate, matches };
    }
    default:
      return state;
  }
}
