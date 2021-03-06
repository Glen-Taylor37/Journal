import { SIGN_IN, SIGN_OUT, SIGN_UP, AUTH_ERROR } from '@actions/types';

const userAuthReducer = (state = {}, action) => {
	console.log(action);
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				...action.payload
			};
		case SIGN_OUT:
			return {
				...state,
				googleId  : null,
				firstName : '',
				lastName  : '',
				email     : '',
				token     : ''
			};
		case SIGN_UP:
			return {
				...state,
				...action.payload
			};
		case AUTH_ERROR:
			return {
				...state,
				error : action.payload
			};
		default:
			return state;
	}
};

export default userAuthReducer;
