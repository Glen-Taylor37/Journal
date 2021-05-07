import {
	CREATE_JOURNAL,
	GET_JOURNAL,
	GET_JOURNALS,
	DELETE_JOURNAL,
	UPDATE_JOURNAL,
	SIGN_IN,
	SIGN_OUT,
	TOGGLE_DARKMODE,
	GET_SETTINGS,
	UPDATE_SETTINGS,
	SIGN_UP,
	AUTH_ERROR,
	CREATE_ENTRY
} from './types';
import history from '../history';
import journals from '@apis/journals';

export const signUp = (formData) => async (dispatch) => {
	try {
		const response = await journals.post('/signup', formData);
		dispatch({ type: SIGN_UP, payload: response.data });
		localStorage.setItem('token', response.data.token);
		history.push('/journals');
	} catch (error) {
		dispatch({ type: AUTH_ERROR, payload: 'Email is in use' });
	}
};

// export const signIn = (userInformation) => async (dispatch) => {
// 	try {
// 		await journals.post('/user/tokensignin', {
// 			idToken : userInformation.idToken
// 		});
// 	} catch (err) {
// 		console.log(err);
// 	}
// 	dispatch({ type: SIGN_IN, payload: userInformation });
// };

export const signIn = (formData) => async (dispatch) => {
	try {
		const response = await journals.post('/signin', formData);
		dispatch({ type: SIGN_IN, payload: response.data });
		localStorage.setItem('token', response.data.token);
		history.push('/journals');
	} catch (error) {
		dispatch({
			type    : AUTH_ERROR,
			payload : 'Email or password is incorrect'
		});
	}
};

export const signOut = () => {
	localStorage.removeItem('token');
	return { type: SIGN_OUT };
};

export const createJournal = (formInput) => async (dispatch) => {
	const token = localStorage.getItem('token');
	const { data } = await journals.post(
		'/journals',
		{
			...formInput,
			entries : []
		},
		{ headers: { Authorization: `${token}` } }
	);
	dispatch({ type: CREATE_JOURNAL, payload: data });
	history.push('/journals');
};

export const getJournals = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	const { data } = await journals.get('/journals', {
		headers : { Authorization: `${token}` }
	});
	dispatch({ type: GET_JOURNALS, payload: data });
};

export const getJournal = (journalId) => async (dispatch) => {
	const token = localStorage.getItem('token');
	const { data } = await journals.get(`/journals/${journalId}`, {
		headers : { Authorization: `${token}` }
	});
	dispatch({ type: GET_JOURNAL, payload: data });
};

export const deleteJournal = (journalId) => async (dispatch) => {
	const token = localStorage.getItem('token');
	await journals.delete(`/journals/${journalId}`, {
		headers : { Authorization: `${token}` }
	});
	dispatch({ type: DELETE_JOURNAL, payload: journalId });
	history.push('/journals');
};

// export const updateJournal = (journalId, journal) => async (dispatch) => {
// 	const token = localStorage.getItem('token');
// 	const { data } = await journals.patch(`/journals/${journalId}`, journal);
// 	dispatch({ type: UPDATE_JOURNAL, payload: data.value });
// 	history.push(`/journals/${journalId}`);
// };

export const createEntry = (journalId, entry) => async (dispatch) => {
	const token = localStorage.getItem('token');
	const {
		data
	} = await journals.post(`/journals/${journalId}/entries`, entry, {
		headers : { Authorization: `${token}` }
	});
	console.log('createEntry', data);
	dispatch({ type: CREATE_ENTRY, payload: data });
	history.push(`/journals/${journalId}`);
};

export const toggleDarkMode = async (mode, getState) => {
	return { type: TOGGLE_DARKMODE, payload: mode };
};

export const getSettings = () => async (dispatch) => {
	const token = localStorage.getItem('token');
	try {
		const { data } = await journals.get('/settings', {
			headers : { Authorization: `${token}` }
		});
		dispatch({
			type    : GET_SETTINGS,
			payload : { darkTheme: data.darkTheme }
		});
		console.log('get settngs: ', data);
	} catch (error) {
		console.log(error);
	}
};

export const updateSettings = (settings) => async (dispatch) => {
	const token = localStorage.getItem('token');

	console.log('settings', settings);
	const { data } = await journals.patch(
		'/settings',
		{ settings: { darkTheme: settings.darkTheme } },
		{
			headers : { Authorization: `${token}` }
		}
	);
	dispatch({ type: UPDATE_SETTINGS, payload: data });
};
