import { countries } from './countries';

describe('countries', () => {
  it('should return an initial state', () => {
    const expected = [];

    const result = countries(undefined, {});

    expect(result).toEqual(expected)
  });

  it('should return state with countries', () => {
    const mockCountries = [
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

    const initialState = null;
    const state = initialState;
    const action = {
      type: "SAVE_COUNTRIES",
      countries: mockCountries
    }

    const newState = mockCountries;

    const result = countries(state, action);

    expect(result).toEqual(newState);
  });




});