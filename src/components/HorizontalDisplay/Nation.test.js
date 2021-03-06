import React from "react";
import ReactDOM from "react-dom";
import Nation from "./Nation";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Nation />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
