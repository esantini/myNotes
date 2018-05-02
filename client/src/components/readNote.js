import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
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

  renderNote(note) {
    return (
      <Fragment>
        <Note note={note}
          onUpdateClick={() => {
            this.props.selectedNote(note);
            this.props.history.push(`/updatenote/${note.id}`)
          }}
          onDeleteClick={() => {
            this.props.selectedNote(note);
            this.props.history.push(`/deletenote/${note.id}`)
          }}
        />
      </Fragment>
    );
  }

  render() {
    const { note } = this.props;

    return (
      <Fragment>

        <Link to="/">Home</Link>

        <h2>
          Note:
				</h2>

        {note ? this.renderNote(note) : (<h3>Loading form.</h3>)}

      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.error, note: state.notes.selectedNote };
}

export default connect(mapStateToProps, actions)(DeleteNote);
