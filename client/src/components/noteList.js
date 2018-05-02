import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Note from './note';

import * as actions from "../actions";

class Notes extends Component {

  render() {

    const notes = this.props.notes;
    return (
      <div className="App">
        <Link to={'createnote'} >Create a new note</Link>
        {notes.length ? (
          <Fragment>
            <h2>
              Notes' List:
            </h2>


            {notes.map((note, index) =>
              <div key={"_notekey_" + index}>
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
                <hr />
              </div>
            )}

          </Fragment>
        ) : (
            <div>
              No notes yet.
          </div>
          )
        }
      </div>
    );
  }
}

function mapStateToProps({ notes }) {
  return { notes: notes.notes, loading: notes.loading };
}

export default connect(mapStateToProps, actions)(Notes);
