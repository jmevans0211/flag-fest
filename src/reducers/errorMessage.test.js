import { errorMessage } from './errorMessage';

describe('errorMessage', () => {
  it('should return an initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });
});