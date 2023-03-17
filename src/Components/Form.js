import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

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

  const btnAdd = (bgColor, bool) => (
    <Fab style={{ backgroundColor: bgColor }} disabled={bool} type="submit">
      <AddIcon />
    </Fab>
  );

  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleInput}
          autoCorrect="off"
        />
        <textarea
          placeholder="Take a note..."
          name="text"
          value={formData.text}
          onChange={handleInput}
          autoCorrect="off"
        />
        <div className="add-btn-container">
          {disable ? (
            btnAdd("#d1d1d1", disable)
          ) : (
            <Zoom in={true}>{btnAdd("#f5ba13", disable)}</Zoom>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
