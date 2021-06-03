import { takeLatest, put } from 'redux-saga/effects';

const taker = (actions, actionType, func, takeMethod = takeLatest, takeOption) => {
  const params = [
    actions,
    function* (action) {
      try {
        console.log(action);
        const result = yield func(action);
        yield put({
          type: `${actionType}_SUCCESS`,
          data: result.data
        })
      } catch (err) {
        yield put({
          type: `${actionType}_FAILURE`,
          data: err.response.data
        })
      }
    },
  ];
  if (takeOption) params.unshift(takeOption);

  return takeMethod(...params);
};

export default taker;