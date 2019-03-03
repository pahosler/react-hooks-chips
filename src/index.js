import React, { useState } from "react";
import ReactDOM from "react-dom";
import randomWords from "random-words";
import "./styles.css";

function App() {
  const [words, setWords] = useState([]);
  const handleClose = e => {
    setWords(words.filter((word, i) => word !== words[e.target.id]));
  };
  return (
    <div className="App">
      <div className="chips">
        {words.map((word, index) => (
          <div key={index} className="chip">
            {word}
            <span id={index} className="close" onClick={handleClose}>
              x
            </span>
          </div>
        ))}
      </div>

      <button onClick={() => setWords([...words, randomWords()])}>
        Click Me!
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
