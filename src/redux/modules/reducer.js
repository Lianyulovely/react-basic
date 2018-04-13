import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import global from './global';

export default combineReducers({
  routing: routerReducer,
  auth,
  global,
});
