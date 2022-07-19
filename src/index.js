import React from "react";
import ReactDOM from "react-dom";

const fName = "Jad";
const lName = "Younes";
const luckyNumber = "4";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p> My Lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
