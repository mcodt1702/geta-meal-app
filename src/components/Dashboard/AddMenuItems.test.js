import React from "react";
import ReactDOM from "react-dom";
import AddMenuItems from "./AddMenuItems";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AddMenuItems />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
