import produce from 'utils/produce';

export const initialState = {
  boardList : null,
  boardListPage : 1,
  boardLoading : true,
  boardLoaded : false,
  boardLoadErr : false
};

export const BOARD_LIST_REQUEST = 'BOARD_LIST_REQUEST'; 
export const BOARD_LIST_SUCCESS = 'BOARD_LIST_SUCCESS'; 
export const BOARD_LIST_FAILURE = 'BOARD_LIST_FAILURE'; 

const reducer = (state = initialState, action) => produce(state, (draft)=> {
  switch (action.type) {
    case BOARD_LIST_REQUEST : 
      break;
    case BOARD_LIST_SUCCESS : 
      draft.boardList = action.data.boardList; 
      break;
    case BOARD_LIST_FAILURE : 
      break;
    default:
      break;
  }
});

export default reducer;
