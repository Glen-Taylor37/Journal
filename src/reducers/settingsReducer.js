import { TOGGLE_DARKMODE, GET_SETTINGS, SAVE_SETTINGS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_DARKMODE:
			return { ...state, theme: action.payload };
		case GET_SETTINGS:
			return { ...state, ...action.payload };
		case SAVE_SETTINGS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
