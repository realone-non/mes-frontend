import { all, call } from 'redux-saga/effects';
import axios from 'axios';

import user from './user';

axios.defaults.baseURL = '/';

export default function* rootSaga() { // 제너레이터 문법
  yield all([
    call(user)
  ])
};