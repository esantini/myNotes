import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UpdateNote extends Component {

	handleFormSubmit({ title, note }) {
			this.props.createNote({ title, note });
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
		const { handleSubmit, title, note } = this.props;

		return (
			<Fragment>

				<Link to="/">Home</Link>

				<h2>
					Create Note
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
	form: 'createNote',
	fields: ['title', 'note']
})(UpdateNote);

function mapStateToProps(state) {
	return { errorMessage: state.error };
}

export default connect(mapStateToProps, actions)(reduxUpdateForm);
