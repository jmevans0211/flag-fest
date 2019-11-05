import { errorMessage } from './errorMessage';

describe('errorMessage', () => {
  it('should return an initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with an error message', () => {
    const mockMessage = 'Error, please try again.';
    const initialState = null;
    const action = {
      type: 'HANDLE_ERROR',
      errorMessage: mockMessage,
    };
    const newState = mockMessage;

    const result = errorMessage(initialState, action);

    expect(result).toEqual(newState);
  });
});