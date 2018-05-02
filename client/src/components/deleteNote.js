import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Note from './note';

class DeleteNote extends Component {

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	renderDeleteButton(note, handleSubmit) {
		return (
			<Fragment>
				<div>Are you sure you want to delete this note?</div>
				<Note note={note} hideControls />
				<button onClick={handleSubmit}>Yes</button>
			</Fragment>
		);
	}

	render() {
		const { handleSubmit, note } = this.props;

		return (
			<Fragment>

				<Link to="/">Home</Link>

				<h2>
					Delete Note
				</h2>

				{note ? this.renderDeleteButton(note, handleSubmit) : (<h3>Loading form.</h3>)}

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
