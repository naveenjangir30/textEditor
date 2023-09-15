import React, { useState } from "react";
import "./index.css";

function App() {
  const [char, setChar] = useState("");

  const text = document.querySelector("#textContent");

  const captial = () => {
    text.style.textTransform = "capitalize";
  };
  const none = () => {
    text.style.textTransform = "none";
  };
  const uper = () => {
    text.style.textTransform = "uppercase";
  };
  const lower = () => {
    text.style.textTransform = "lowercase";
  };
  function handleOnChange(e) {
    setChar(e.target.value);
  }

  return (
    <>
      <div id="container">
        <div id="textEditor">
          <textarea
            value={char}
            id="textContent"
            onChange={handleOnChange}
          ></textarea>
          <div id="buttons">
            <button className="btn" onClick={none}>Default</button>
            <button className="btn" onClick={captial}>Capitalize</button>
            <button className="btn" onClick={uper}>Uppercase</button>
            <button className="btn" onClick={lower}>Lowercase</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
