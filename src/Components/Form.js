import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const { noteArr, setNoteArr } = props;

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    date: date,
    time: time,
  });

  const ID = uuid();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const newDate = new Date().toLocaleDateString();
    const newTime = new Date().toLocaleTimeString();
    const { title, text } = formData;
    if (title === "" || text === "") return;

    setNoteArr([
      ...noteArr,
      {
        title: title.toUpperCase(),
        content: text,
        id: ID,
        date: newDate,
        time: newTime,
      },
    ]);

    setFormData({
      title: "",
      text: "",
      date: newDate,
      time: newTime,
    });
  };

  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInput}
        />
        <textarea
          placeholder="Take a note..."
          name="text"
          value={formData.text}
          onChange={handleInput}
        />
        <div className="add-btn-container">
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
