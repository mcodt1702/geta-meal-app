import React from "react";
import ReactDOM from "react-dom";
import Type from "./Type";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Type />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
