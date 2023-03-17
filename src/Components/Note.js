import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from '@material-ui/core/Tooltip';

const Note = (props) => {
  const { title, content, id, deleteNote, time, date } = props;

  return (
    <div className="note-container">
      <div className="note">
        <h3 className="title">
          {title} <span className="date">{date}</span>
        </h3>
        <p className="content">{content}</p>
        <div className="delete-btn-container">
          <span className="date">{time}</span>
          <Tooltip aria-label="delete" title="Delete">
            <button onClick={() => deleteNote(id)}>
              <DeleteIcon aria-label="delete" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Note;
