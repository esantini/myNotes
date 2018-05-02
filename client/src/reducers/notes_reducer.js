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
		case actionTypes.UPDATE_NOTE:

			const newNotes = [];
			for (const note of state.notes) {
				// deep copy
				if (note.id !== action.note.id) {
					newNotes.push({ ...note });
				}
				else {
					newNotes.push(action.note);
				}
			}

			return { ...state, notes: newNotes };
		case actionTypes.SELECTED_NOTE:
			return { ...state, selectedNote: action.note };
		default:
			return state;
	}
}
