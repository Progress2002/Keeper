import React, { useState } from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

const Header = () => {
  const Time = new Date().toLocaleTimeString();

  const [time, setObj] = useState(Time);

  const UpdateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    return setObj(newTime);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="header-container">
      <header>
        <h1><HighlightIcon/>Keeper</h1>
        <span>{time}</span>
      </header>
    </div>
  );
};

export default Header;
