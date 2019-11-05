export const saveCountries = countries => ({
  type: 'SAVE_COUNTRIES',
  countries,
});

export const removeCountryGuessed = () => ({
  type: 'REMOVE_COUNTRY_GUESSED',
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
});