import { countries } from './countries';

describe('countries', () => {
  it('should return an initial state', () => {
    const expected = [];

    const result = countries(undefined, {});

    expect(result).toEqual(expected)
  });





});