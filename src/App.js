import { React, useState } from "react";
import "./styles.css";

export default function App() {
  var userName = "Mukul";
  var heading = "React Call Api Practice";
  var serverApi = "https://api.funtranslations.com/translate/minion.json";

  const [text, setText] = useState('');

  function fetchHandler(text) {
    fetch(
      apiHandler(text)
        .then((response) => response.json())
        .then((json) => console.log(json))
    );
  }

  function inputHandler(event) {
    var userInput = event.target.value;
    setText(userInput);
  }

  function apiHandler(text) {
    var abc = serverApi + "?text=" + text;
    console.log(abc);
  }
  return (
    <div className="App">
      <h1>
        Hello <span style={{ color: "red" }}>{userName} </span>
      </h1>
      <hr />
      <h2 style={{ fontSize: "1em" }}>
        {heading}
        {text}
      </h2>
      <hr />
      <input
        onChange={inputHandler}
        style={{ width: "50%", height: "10vh" }}
      ></input>
      <button onClick={fetchHandler}> Click Here</button>
      <div className="outPut">{text}</div>
    </div>
  );
}
