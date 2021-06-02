import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
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

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}
function logInAPI(data) {
  if (process.env.NODE_ENV === "development") {
    
  } else {
    return axios.post('/user/login', data);
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
  ]);
}
