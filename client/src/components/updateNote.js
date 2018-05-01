import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
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

	render() {
		const { handleSubmit } = this.props;

		const noteFound = this.props.notes.find((note) => note.id === this.props.match.params.id);
		const { title, note } = noteFound ? noteFound : {};

		return (
			<Fragment>

				<Link to="/">Home</Link>

				<h2>
					Update Note
				</h2>

				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<label>Title:</label>
						<Field name="title" component="input" type="text" className="form-control" value={title} />
					</fieldset>
					<fieldset className="form-group">
						<label>Note:</label>
						<Field name="note" component="input" type="text" className="form-control" value={note} />
					</fieldset>
					{this.renderAlert()}
					<button action="submit" className="btn btn-primary">Submit</button>
				</form>
			</Fragment>
		);
	}
}

const reduxUpdateForm = reduxForm({
	form: 'updateNote',
	fields: ['id', 'title', 'note']
})(UpdateNote);

function mapStateToProps(state) {
	return { errorMessage: state.error, notes: state.notes.notes };
}

export default connect(mapStateToProps, actions)(reduxUpdateForm);
