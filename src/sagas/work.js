import { all } from 'redux-saga/effects';
import axios from 'axios';
import taker from './taker';

import { WORK_LIST_REQUEST } from 'reducers/work';

const dummyData = process.env.NODE_ENV === "development" ? [
  {
    id : 1,
    workNum : 20200911003,
    orderNum : 20200911003,
    userIdNum : 10000004,
    workName : '강남길'
  }
] : null;