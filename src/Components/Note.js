import React from "react";

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
          <button onClick={() => deleteNote(id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
