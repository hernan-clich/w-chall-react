import { combineReducers } from 'redux';

const isSignedInReducer = (isSignedIn = false, action) => {
  if(action.type === 'IS_LOGGED'){
    return !isSignedIn;
  }

  return isSignedIn;
};

const widthInitialState = {
  type: 'VIEWPORT_WIDTH',
  payload: window.innerWidth
};

const currVWReducer = (state = widthInitialState, action) => {
  if(action.type === 'VIEWPORT_WIDTH'){
    return {
      ...state,
      payload: action.payload
    };
  }

  return state;
};

export default combineReducers({
  isSignedIn: isSignedInReducer,
  currVW: currVWReducer
});