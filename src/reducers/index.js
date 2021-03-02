import { combineReducers } from 'redux';
import userAuthReducer from './userAuthReducer';
import journalReducer from './journalReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
	user     : userAuthReducer,
	journals : journalReducer,
	settings : settingsReducer
});
