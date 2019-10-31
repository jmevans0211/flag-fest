export const countries = (state=[], action) => {
  switch(action.type) {
    case 'SAVE_COUNTRIES':
      return action.countries
    default:
      return state
  }
}