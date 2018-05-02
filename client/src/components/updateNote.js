import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UpdateNote extends Component {

	handleFormSubmit({ id, title, note }) {
		this.props.updateNote({ id, title, note });
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

	handleChangeTitle(e) {
		this.props.selectedNote({ ...this.props.note, title: e.target.value });
	}

	handleChangeNote(e) {
		this.props.selectedNote({ ...this.props.note, note: e.target.value });
	}

	renderForm(note, handleSubmit) {
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Title:</label>
					<input name="title" type="text" className="form-control" value={note.title} onChange={this.handleChangeTitle.bind(this)} />
				</fieldset>
				<fieldset className="form-group">
					<label>Note:</label>
					<input name="note" type="text" className="form-control" value={note.note} onChange={this.handleChangeNote.bind(this)} />
				</fieldset>
				{this.renderAlert()}
				<button action="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}

	render() {
		const { handleSubmit, note } = this.props;

		return (
			<Fragment>

				<Link to="/">Home</Link>

				<h2>
					Update Note
				</h2>

				{note ? this.renderForm(note, handleSubmit) : (<h3>Loading form.</h3>)}

			</Fragment>
		);
	}
}

const reduxUpdateForm = reduxForm({
	form: 'updateNote',
	fields: ['id', 'title', 'note']
})(UpdateNote);

function mapStateToProps(state) {
	return { errorMessage: state.error, note: state.notes.selectedNote };
}

export default connect(mapStateToProps, actions)(reduxUpdateForm);
