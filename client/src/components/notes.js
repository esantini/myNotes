import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from "../actions";
import { formatDate } from "../utils";

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
                <h3>Title: {note.title}</h3>
                <p>{note.note}</p>
                <div>
                  Created: {formatDate(new Date(note.created))}
                </div>
                <div>
                  Updated: {formatDate(new Date(note.updated))}
                </div>

                <button onClick={() => {
                  this.props.selectedNote(note);
                  this.props.history.push(`/updatenote/${note.id}`)
                }}>
                  Update
                </button>

                <button onClick={() => {
                  this.props.selectedNote(note);
                  this.props.history.push(`/deletenote/${note.id}`)
                }}>
                  Delete
                </button>
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
  return { notes: notes.notes };
}

export default connect(mapStateToProps, actions)(Notes);
