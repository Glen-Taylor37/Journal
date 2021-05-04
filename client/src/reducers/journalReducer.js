import {
	CREATE_JOURNAL,
	DELETE_JOURNAL,
	GET_JOURNAL,
	GET_JOURNALS,
	UPDATE_JOURNAL,
	CREATE_ENTRY
} from '@actions/types';
import _ from 'lodash';

const journalReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_JOURNALS:
			return {
				...state,
				..._.mapKeys(action.payload, (journal) => journal.id)
			};
		case GET_JOURNAL:
			return {
				...state,
				[action.payload.id]: action.payload
			};
		case CREATE_ENTRY:
			console.log('action payload', action.payload);
			const journals = { ...state };
			journals[action.payload.journalId].entries.push(action.payload);
			return journals;
		case CREATE_JOURNAL:
			return { ...state, [action.payload.id]: action.payload };
		case UPDATE_JOURNAL:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_JOURNAL:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default journalReducer;
