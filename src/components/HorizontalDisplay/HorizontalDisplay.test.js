import React from "react";
import ReactDOM from "react-dom";
import HorizontalDisplay from "./HorizontalDisplay";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <HorizontalDisplay />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
