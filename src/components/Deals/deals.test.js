import React from "react";
import ReactDOM from "react-dom";
import Deals from "./Deals";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Deals />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
