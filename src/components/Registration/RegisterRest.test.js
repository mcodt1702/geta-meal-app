import React from "react";
import ReactDOM from "react-dom";
import RegisterRest from "./RegisterRest";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <RegisterRest />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
