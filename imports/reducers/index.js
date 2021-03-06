// TODO: break into multiple reducers
// TODO: use immutable.js
export default (state = {}, action) => {
  switch (action.type) {
    // TODO: extract action types to constants
    case 'SET_MATCHES': {
      return { ...state, matches: action.payload };
    }
    case 'SET_COMPETITIONS': {
      return { ...state, competitions: action.payload };
    }
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
      let { showScores } = state;
      if (id === 'all') {
        // clear out state for individual matches when show/hide all is clicked
        showScores = { all: value };
      } else {
        showScores = { ...showScores, [id]: value };
      }
      return { ...state, showScores };
    }
    case 'SHOW_DIMMER': {
      return { ...state, showDimmer: true };
    }
    case 'HIDE_DIMMER': {
      return { ...state, showDimmer: false };
    }
    default:
      return state;
  }
}
