import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

const App = () => {
  const [noteArr, setNoteArr] = useState(
    JSON.parse(localStorage.getItem("notes")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteArr));
  }, [noteArr]);

  const deleteNote = (id) => {
    const newArr = noteArr.filter((note) => note.id !== id);
    setNoteArr(newArr);
  };

  return (
    <>
      <Header />
      <Form setNoteArr={setNoteArr} noteArr={noteArr} />
      <div className="note-section">
        {noteArr.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            time={note.time}
            date={note.date}
            deleteNote={deleteNote}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
