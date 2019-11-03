import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of SAVE_COUNTRIES', () => {
    const countries = [
      {
        flag: "https://restcountries.eu/data/srb.svg",
        name: "Serbia",
        numericCode: 688,
        region: "Europe"
      },
      {
        flag: "https://restcountries.eu/data/lux.svg",
        name: "Luxembourg",
        numericCode: 442,
        region: "Europe"
      }
    ]
    
    const expectedAction = {
      type: 'SAVE_COUNTRIES',
      countries: countries
    }

    const result = actions.saveCountries(countries)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of REMOVE_COUNTRY_GUESSED', () => {
    const expectedAction = {
      type: 'REMOVE_COUNTRY_GUESSED',
    }

    const result = actions.removeCountryGuessed()

    expect(result).toEqual(expectedAction)
  });


});