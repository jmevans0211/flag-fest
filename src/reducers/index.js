import { combineReducers } from 'redux';
import { countries } from './countries';
import { errorMessage } from './errorMessage';

export const rootReducer = combineReducers({
  countries,
  errorMessage,
});