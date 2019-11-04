import { cleanCountryData } from './helpers';
import { mockData } from './mockData';

describe('helpers', () => {
  it('should clean country data', () => {
    const mockCountries = mockData;
    const expected = [
      {
        name: 'Afghanistan',
        region: 'Asia',
        numericCode: parseInt('004'),
        flag: 'https://restcountries.eu/data/afg.svg',
      },
      {
        name: 'Åland Islands',
        region: 'Europe',
        numericCode: parseInt('248'),
        flag: 'https://restcountries.eu/data/ala.svg',
      },
    ];

    const result = cleanCountryData(mockCountries);
    expect(result).toEqual(expected);
  });
});