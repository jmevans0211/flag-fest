import { fetchData } from './apiCalls';
import { mockData } from './mockData';

describe('fetchData', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it('should fetch with correct url', async () => {
    const mockUrl = 'https://restcountries.eu/rest/v2/all';
    await fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  });

  it('should return an array of countries', async () => {
    const mockUrl = 'https://restcountries.eu/rest/v2/all';

    const results = await fetchData(mockUrl);
    expect(results).toEqual(mockData)
  });


});