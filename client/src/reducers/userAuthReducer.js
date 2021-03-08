import { SIGN_IN, SIGN_OUT } from '@actions/types';

const userAuthReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			console.log(action.payload.accessToken);
			return {
				...state,
				signedIn : true,
				googleId : action.payload.profile.getId(),
				name     : action.payload.profile.getGivenName()
			};
		case SIGN_OUT:
			return { ...state, signedIn: false, googleId: null, name: '' };

		default:
			return state;
	}
};

export default userAuthReducer;
