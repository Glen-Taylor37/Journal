import { CREATE_JOURNAL, GET_JOURNALS, SIGN_IN, SIGN_OUT } from './types';
import history from '../history';
import journals from '../apis/journals';

export const signIn = (basicProfile) => {
	return { type: SIGN_IN, payload: basicProfile };
};

export const signOut = () => {
	return { type: SIGN_OUT };
};

export const createJournal = (formInput) => async (dispatch, getState) => {
	const userId = getState().user.googleId;
	const { data } = await journals.post('/journals', { ...formInput, userId });
	dispatch({ type: CREATE_JOURNAL, payload: data });
	history.push('/');
};

export const getJournals = () => async (dispatch) => {
	const { data } = await journals.get('/journals');
	console.log(data);
	dispatch({ type: GET_JOURNALS, payload: data });
};
