import { all } from 'redux-saga/effects';
import axios from 'axios';
import taker from './taker';

import {
  LOG_IN_REQUEST,
} from 'reducers/user';

const dummyData = process.env.NODE_ENV === "development" ? {
  userAuth : {
    userId : 'test',
    userPw : '1234'
  },
  userInfo : {
    userid : 'test',
    userName : '홍길동'
  }
} : null;

function* logInAPI(data) {
  if (process.env.NODE_ENV === "development") {
    return dummyData.userInfo;
  } else {
    return axios.post('/user/login', data);
  }
}

export default function* userSaga() {
  yield all([
    taker(LOG_IN_REQUEST, 'LOG_IN', logInAPI),
  ]);
}
