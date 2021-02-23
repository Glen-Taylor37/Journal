import { combineReducers } from 'redux';
import userAuthReducer from './userAuthReducer';
import journalReducer from './journalReducer';

export default combineReducers({
	user     : userAuthReducer,
	journals : journalReducer
});
