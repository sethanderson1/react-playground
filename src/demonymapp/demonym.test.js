import React from "react";
import ReactDOM from "react-dom";
import Denonym from "./denonym";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Denonym />, div);
});  