import React from "react";
import ReactDOM from "react-dom";
import CompleteOrder from "./CompleteOrder";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <CompleteOrder />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
