import * as actionTypes from "./types";

import axios from '../myAxios';

export function getNotes() {

	return function (dispatch) {

		axios.get('api/notes')
			.then(response => {
				// If request is good...
				dispatch({ type: actionTypes.GET_NOTES, notes: response.data });
			})
			.catch(err => {
				// If request is bad... 
				// - Show an error to the user
				dispatch({ type: actionTypes.GET_NOTES_ERROR })
			});

	}
}

export function createNote({ title, note }) {

	return function (dispatch) {

		axios.post('api/createnote', { title, note })
			.then(response => {
				// If request is good...
				dispatch({ type: actionTypes.CREATE_NOTE, note: response.data.note });
			})
			.catch(err => {
				// If request is bad... 
				// - Show an error to the user
				dispatch({ type: actionTypes.CREATE_NOTE_ERROR })
			});

	}
}

export function updateNote({ id, title, note }) {

	return function (dispatch) {

		console.log("action: post api/updatenote:", id, title, note);

		axios.post('api/updatenote', { id, title, note })
			.then(response => {
				// If request is good...
				dispatch({ type: actionTypes.UPDATE_NOTE })
			})
			.catch(err => {
				// If request is bad... 
				// - Show an error to the user
				dispatch({ type: actionTypes.UPDATE_NOTE_ERROR })
			});

	}
}
