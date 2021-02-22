import { CREATE_JOURNAL, SIGN_IN, SIGN_OUT } from './types';
import history from '../history';
import journals from '../apis/journals';

export const signIn = (basicProfile) => {
	return { type: SIGN_IN, payload: basicProfile };
};

export const signOut = () => {
	return { type: SIGN_OUT };
};

export const createStream = (formInput) => async (dispatch, getState) => {
	const userId = getState().user.googleId;
	console.log(userId);
	const { data } = await journals.post('/journals', { formInput, userId });
	dispatch({ type: CREATE_JOURNAL, payload: data });
	history.push('/');
};
