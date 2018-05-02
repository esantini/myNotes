import React, { Fragment } from 'react';
import { formatDate } from "../utils";

export default ({ note, onUpdateClick, onDeleteClick, hideControls }) => {
  const { title, created, updated } = note;
  note = note.note;

  console.log("hideControls", hideControls);

  return (
    <Fragment>
      <h3>Title: {title}</h3>
      <p>{note}</p>
      <div>
        Created: {formatDate(new Date(created))}
      </div>
      <div>
        Updated: {formatDate(new Date(updated))}
      </div>

      {!hideControls && (<Fragment>
        <button onClick={onUpdateClick}>Update</button>
        <button onClick={onDeleteClick}>Delete</button>
      </Fragment>)}

    </Fragment>
  );
}

