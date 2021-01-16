import React from "react";
import ReactDOM from "react-dom";
var luckyno = "your lucky no is 3";
var name = "kanthi";
ReactDOM.render(
  <div>
    <h1>Hello {name}!!</h1>
    <p>{luckyno}</p>
  </div>,
  document.getElementById("root")
);
