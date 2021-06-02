import { all, call } from 'redux-saga/effects';
import axios from 'axios';

axios.defaults.baseURL = 'http://dvnode.gabia.io/api/board/list';

export default function* rootSaga() { // 제너레이터 문법
  yield all([

  ])
};