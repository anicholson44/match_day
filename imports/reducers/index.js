// TODO: break into multiple reducers
// TODO: use immutable.js
export default (state = {}, action) => {
  switch(action.type) {
    // TODO: extract action types to constants
    case 'UPDATE_SELECTED_COMPETITIONS': {
      const { selectedCompetitions, matches } = action.payload;
      return { ...state, selectedCompetitions, matches };
    }
    case 'CHANGE_DATES': {
      const { startDate, endDate, matches } = action.payload;
      return { ...state, startDate, endDate, matches };
    }
    case 'CHANGE_SHOW_SCORE': {
      const { id, value } = action.payload;
      const { showScores } = state;
      showScores[id] = value;
      return { ...state, showScores };
    }
    default:
      return state;
  }
}
