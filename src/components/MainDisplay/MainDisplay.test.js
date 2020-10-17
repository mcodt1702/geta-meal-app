import React from "react";
import ReactDOM from "react-dom";
import MainDisplay from "./MainDisplay";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <MainDisplay />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
