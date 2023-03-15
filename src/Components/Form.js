import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const { noteArr, setNoteArr } = props;

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const [disable, setDisable] = useState(true);
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

  useEffect(() => {
    const { title, text } = formData;
    title !== "" && text !== "" ? setDisable(false) : setDisable(true);
  }, [formData]);

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

    setDisable(true);
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
          <button
            style={{ backgroundColor: disable ? "#d1d1d1" : "#f5ba13" }}
            disabled={disable}
            type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
