import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (basicProfile) => {
	return { type: SIGN_IN, payload: basicProfile };
};

export const signOut = () => {
	return { type: SIGN_OUT };
};

export const createStream = (formInput) => {};
