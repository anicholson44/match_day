export default (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_SELECTED_COMPETITIONS':
      const { selectedCompetitions } = action.payload;
      return { ...state, selectedCompetitions };
    default:
      return state;
  }
}
