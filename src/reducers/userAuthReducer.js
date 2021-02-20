import { SIGN_IN, SIGN_OUT } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			state.signedIn = true;
			state.googleId = action.payload;
			return { ...state, signedIn: true, googleId: action.payload };
		case SIGN_OUT:
			state.signedIn = false;
			state.googleId = null;
			return { ...state, signedIn: false, googleId: null };
		default:
			return state;
	}
};
