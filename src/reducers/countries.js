export const countries = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_COUNTRIES':
      return action.countries;
    case 'REMOVE_COUNTRY_GUESSED':
      state.splice(0, 1)
      return [...state];
    default:
      return state;
  }
};