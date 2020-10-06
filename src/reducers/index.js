import { combineReducers } from 'redux';

const isSignedInReducer = (isSignedIn = false, action) => {
  if(action.type === 'IS_LOGGED'){
    return !isSignedIn;
  }

  return isSignedIn;
};

export default combineReducers({
  isSignedIn: isSignedInReducer
});