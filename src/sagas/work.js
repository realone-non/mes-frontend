import { all } from 'redux-saga/effects';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/ko';

import taker from './taker';

import { WORK_LIST_REQUEST } from 'reducers/work';

const dummyData = process.env.NODE_ENV === "development" ? {
  data : [
    {
      id : 1,
      workNum : 20200911003,
      orderNum : 20200911003,
      userIdNum : 10000004,
      workerName : '강남길',
      workStartDate : '20200911',
      workEndDate : '20200911',
      etc : '슬림링'
    },
    {
      id : 2,
      workNum : 20200911004,
      orderNum : 20200911004,
      userIdNum : 10000006,
      workerName : '강하늘',
      workStartDate : '20200911',
      workEndDate : '20200911',
      etc : '브라켓'
    }
  ]
} : null;

function* workAPI() {
  if (process.env.NODE_ENV === "development") {
    dummyData.data.map((v) => {
      v.workStartDate = moment(v.workStartDate).format('YYYY-DD-MM');
      v.workEndDate = moment(v.workEndDate).format('YYYY-DD-MM');
    });
    return dummyData;
  } else {
    return null;
  }
};

export default function* workSaga() {
  yield all([
    taker(WORK_LIST_REQUEST, 'WORK_LIST', workAPI)
  ])
}

