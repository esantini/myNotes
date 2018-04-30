import * as actionTypes from '../actions/types';

export default function (state = { notes: [] }, action) {

	switch (action.type) {
		case actionTypes.CREATE_NOTE:
			console.log(action.notes);
			return {
				...state,
				notes: [...state.notes, action.notes],
				error: null
			};
		case actionTypes.GET_NOTES:

			console.log("reducer get-notes", action);

			return { ...state, notes: action.notes.data, error: null };
		default:
			return state;
	}
}
