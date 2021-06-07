import { combineReducers } from 'redux';
import user from './user';
import work from './work';
import board from './board';

export default combineReducers({
  user,
  work,
  board
});