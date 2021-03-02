import {
	CREATE_JOURNAL,
	GET_JOURNAL,
	GET_JOURNALS,
	DELETE_JOURNAL,
	UPDATE_JOURNAL,
	SIGN_IN,
	SIGN_OUT,
	TOGGLE_DARKMODE
} from './types';
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
	const date = new Date().toLocaleString();
	const { data } = await journals.post('/journals', {
		...formInput,
		userId,
		date,
		entries : []
	});
	dispatch({ type: CREATE_JOURNAL, payload: data });
	history.push('/');
};

export const getJournals = () => async (dispatch) => {
	const { data } = await journals.get('/journals');
	console.log(data);
	dispatch({ type: GET_JOURNALS, payload: data });
};

export const getJournal = (journalId) => async (dispatch) => {
	const { data } = await journals.get(`/journals/${journalId}`);
	dispatch({ type: GET_JOURNAL, payload: data });
};

export const deleteJournal = (journalId) => async (dispatch) => {
	await journals.delete(`/journals/${journalId}`);
	dispatch({ type: DELETE_JOURNAL, payload: journalId });
	history.push('/');
};

export const updateJournal = (journalId, journal) => async (dispatch) => {
	console.log('values', journal);
	const { data } = await journals.put(`/journals/${journalId}`, journal);
	console.log('data: ', data);
	dispatch({ type: UPDATE_JOURNAL, payload: data.value });
	history.push(`/journals/${journalId}`);
};

export const ToggleDarkMode = (mode) => {
	return { type: TOGGLE_DARKMODE, payload: mode };
};
