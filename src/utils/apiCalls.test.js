import { fetchData } from './apiCalls';
import { mockData } from './mockData';

describe('fetchData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      });
    });
  });

  it('should fetch with correct url', async () => {
    const mockUrl = 'https://restcountries.eu/rest/v2/all';
    await fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return an array of countries', async () => {
    const mockUrl = 'https://restcountries.eu/rest/v2/all';

    const results = await fetchData(mockUrl);
    expect(results).toEqual(mockData);
  });

  it('should return an error when promise resolved is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Error. Could not fetch.',
      });
    });

    const mockUrl = 'https://kittens.com';

    expect(fetchData(mockUrl)).rejects.toEqual(Error('Error. Could not fetch.'));
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(fetchData()).rejects.toEqual(Error());
  });
});