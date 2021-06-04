import { combineReducers } from 'redux';
import user from './user';
import work from './work';

export default combineReducers({
  // 다른 리듀서를 만들게되면 여기에 넣어줌
  user,
  work
});