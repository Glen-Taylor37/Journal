import { SIGN_IN, SIGN_OUT } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				signedIn : true,
				googleId : action.payload.getId(),
				name     : action.payload.getGivenName()
			};
		case SIGN_OUT:
			return { ...state, signedIn: false, googleId: null, name: '' };
		default:
			return state;
	}
};
