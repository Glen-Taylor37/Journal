import { TOGGLE_DARKMODE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case TOGGLE_DARKMODE:
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};
