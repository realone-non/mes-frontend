import produce from 'utils/produce';

export const initialState = {
  // 게시판 리스트
  boardList : null,
  boardListPage : 1,
  boardLoading : true,
  boardLoaded : false,
  boardLoadErr : false,
  // 게시판 보기
  boardViewContent : null,
  boardViewLoading : false,
  boardViewErr : false
};

export const BOARD_LIST_REQUEST = 'BOARD_LIST_REQUEST'; 
export const BOARD_LIST_SUCCESS = 'BOARD_LIST_SUCCESS'; 
export const BOARD_LIST_FAILURE = 'BOARD_LIST_FAILURE'; 

export const BOARD_VIEW_REQUEST = 'BOARD_VIEW_REQUEST';
export const BOARD_VIEW_SUCCESS = 'BOARD_VIEW_SUCCESS';
export const BOARD_VIEW_FAILURE = 'BOARD_VIEW_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft)=> {
  switch (action.type) {
    case BOARD_LIST_REQUEST : 
      break;
    case BOARD_LIST_SUCCESS : 
      draft.boardList = action.data.boardList; 
      break;
    case BOARD_LIST_FAILURE : 
      break;
    case BOARD_VIEW_REQUEST :
      break;
    case BOARD_VIEW_SUCCESS :
      draft.boardViewContent = action.data;
      break;
    case BOARD_VIEW_FAILURE :
      break;
    default:
      break;
  }
});

export default reducer;
