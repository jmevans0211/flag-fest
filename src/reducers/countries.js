export const countries = (state=[], action) => {
  switch(action.type) {
    case 'SAVE_COUNTRIES':
      return action.countries
    case 'REMOVE_COUNTRY_GUESSED':
      return state.unshift()
    default:
      return state
  }
}