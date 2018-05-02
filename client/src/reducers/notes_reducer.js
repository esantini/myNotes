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
			return { ...state, notes: action.notes.data, error: null, loading: false };
		case actionTypes.UPDATE_NOTE:

			const newNotes = state.notes.reduce((accumulator, currentValue) => {
				if (currentValue.id === action.note.id) {
					accumulator.push(action.note);
				}
				else {
					accumulator.push(currentValue);
				}
				return accumulator;
			}, []);
			return { ...state, notes: newNotes };
		case actionTypes.SELECTED_NOTE:
			return { ...state, selectedNote: action.note };
		case actionTypes.DELETE_NOTE:
			return { ...state };
		case actionTypes.LOADING: {
			return { ...state, loading: true }
		}
		default:
			return state;
	}
}
