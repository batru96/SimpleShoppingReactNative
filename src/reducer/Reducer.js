import { combineReducers } from 'redux';
import screenName from './_screenName';
import isDrawerOpen from './_isDrawerOpen';

const reducer = combineReducers({ screenName, isDrawerOpen });

export default reducer;
