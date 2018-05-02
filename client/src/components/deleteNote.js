import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Note from './note';

class DeleteNote extends Component {

	constructor(props) {
		super(props);

		if (!props.note) {
			props.getSelectedNote(props.match.params.id);
		}
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	renderDeleteButton(note) {
		return (
			<Fragment>
				<div>Are you sure you want to delete this note?</div>
				<Note note={note} hideControls />
				<button onClick={() => {
					this.props.deleteNote({ id: this.props.note.id, history: this.props.history })
				}}>Yes</button>
			</Fragment>
		);
	}

	render() {
		const { note } = this.props;

		return (
			<Fragment>

				<Link to="/">Home</Link>

				<h2>
					Delete Note
				</h2>

				{note ? this.renderDeleteButton(note) : (<h3>Loading form.</h3>)}

			</Fragment>
		);
	}
}

const reduxUpdateForm = reduxForm({
	form: 'updateNote',
	fields: ['id', 'title', 'note']
})(DeleteNote);

function mapStateToProps(state) {
	return { errorMessage: state.error, note: state.notes.selectedNote };
}

export default connect(mapStateToProps, actions)(reduxUpdateForm);
