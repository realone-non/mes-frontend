import produce from 'utils/produce';

export const initialState = {
  workList : null,
  pageNum : 1
};

export const WORK_LIST_REQUEST = 'WORK_LIST_REQUEST'; 
export const WORK_LIST_SUCCESS = 'WORK_LIST_SUCCESS'; 
export const WORK_LIST_FAILURE = 'WORK_LIST_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case WORK_LIST_REQUEST :
      draft.workList = []
      break;
    case WORK_LIST_SUCCESS :
      draft.workList = action.data;
      break;
    case WORK_LIST_FAILURE :
      draft.workList = []
      break;
    default:
      break;
  }
});

export default reducer;