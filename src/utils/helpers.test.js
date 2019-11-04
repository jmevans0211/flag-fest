import { cleanCountryData } from './helpers';
import { mockData } from './mockData';

describe('helpers', () => {
  it.skip('should clean country data', () => {
    const mockCountries = mockData;
    const expected = [
      {
        name: "Afghanistan",
        region: "Asia",
        numericCode: "004",
        flag: "https://restcountries.eu/data/afg.svg",
      },
      {
        name: "Åland Islands",
        region: "Europe",
        numericCode: "248",
        flag: "https://restcountries.eu/data/ala.svg",
      }
    ]

    const result = cleanCountryData(mockCountries)
    
    expect(result).toEqual(expected)
  });
});