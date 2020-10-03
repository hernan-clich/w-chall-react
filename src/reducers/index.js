import { combineReducers } from 'redux';

const isSignedInReducer = (isSignedIn = false, action) => {
  if(action.type === 'IS_SIGNED_IN'){
    return action.payload;
  }

  return isSignedIn;
};

export default combineReducers({
  isSignedIn: isSignedInReducer
});