import { all } from 'redux-saga/effects';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/ko';

import taker from './taker';

import { BOARD_LIST_REQUEST, BOARD_VIEW_REQUEST } from 'reducers/board';

const dummyData = process.env.NODE_ENV === 'development' ? {
  data : {
    boardList : [
      { wrId : 1, wrSubject:'공지사항1',wrDateTime:'20200607',wrName:'관리자', wrContent:'공지사항 입니다' },
      { wrId : 2, wrSubject:'공지사항2',wrDateTime:'20200607',wrName:'관리자', wrContent:'공지사항 입니다' },
      { wrId : 3, wrSubject:'공지사항3',wrDateTime:'20200607',wrName:'관리자', wrContent:'공지사항 입니다' },
      { wrId : 4, wrSubject:'공지사항4',wrDateTime:'20200607',wrName:'관리자', wrContent:'공지사항 입니다' },
    ]
  }
} : null;

function* boardListAPI() {
  if (process.env.NODE_ENV === 'development') {
    dummyData.data.boardList.map((v) => {
      v.wrDateTime = moment(v.wrDateTime).format('YYYY-DD-MM');
    });
    return dummyData;
  } else {
    return null;
  };
};

function* boardViewAPI(action) {
  if (process.env.NODE_ENV === 'development') {
    const filters = dummyData.data.boardList.filter(list => list.wrId === action.data);
    const result = {
      data : filters[0]
    }
    return result;
  } else {
    return null;
  };
};

export default function* boardSaga() {
  yield all([
    taker(BOARD_LIST_REQUEST, 'BOARD_LIST', boardListAPI),
    taker(BOARD_VIEW_REQUEST, 'BOARD_VIEW', boardViewAPI)
  ]);
};