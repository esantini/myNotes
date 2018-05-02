import * as actionTypes from '../actions/types';

export default function (state = { notes: [] }, action) {

	switch (action.type) {
		case actionTypes.CREATE_NOTE:
			return {
				...state,
				notes: [...state.notes, action.note],
				error: null
			};
		case actionTypes.GET_NOTES:
			return { ...state, notes: action.notes.data, error: null };
		case actionTypes.SELECTED_NOTE:
			return { ...state, selectedNote: action.note };
		default:
			return state;
	}
}
