import { CREATE_JOURNAL, GET_JOURNAL, GET_JOURNALS } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_JOURNALS:
			return {
				...state,
				..._.mapKeys(action.payload, (journal) => journal._id)
			};
		case GET_JOURNAL:
			return {
				...state,
				[action.payload._id]: action.payload
			};
		case CREATE_JOURNAL:
			return { ...state, [action.payload._id]: action.payload };
		default:
			return state;
	}
};
