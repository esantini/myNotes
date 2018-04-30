import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Notes extends Component {

  render() {

    const notes = this.props.notes;
    return (
      <div className="App">
        {notes.length ? (
          <Fragment>

            <Link to={'createnote'} >Create a new note</Link>
            
            <h2>
              Your Notes:
            </h2>


            {notes.map((note, index) =>
              <div key={"_notekey_" + index}>
                <h3>Title: {note.title}</h3>
                <p>{note.note}</p>
                <div>
                  Created: {note.created}
                </div>
                <div>
                  Updated: {note.updated}
                </div>
                <Link to={`/updatenote?${note.id}`} >Update</Link>
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

export default connect(mapStateToProps)(Notes);
