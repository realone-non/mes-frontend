import produce from 'utils/produce';

export const initialState = {
  userInfo : null,
  loggedIn : false,
  loggedOut : true,
  loggedIng : false,
  loggedError : false
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST :
      draft.loggedIng = true;
      draft.loggedIn = false;
      draft.loggedOut = true;
      break;
    case LOG_IN_SUCCESS :
      draft.loggedIng = false;
      draft.loggedError = false;
      draft.loggedIn = true;
      draft.loggedOut = false;
      draft.userInfo = action.data;
      break;
    case LOG_IN_FAILURE :
      draft.loggedError = true;
      draft.loggedIn = false;
      draft.loggedOut = true;
      break;
    default:
      break;
  }
});

export default reducer;