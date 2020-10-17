import React from "react";
import ReactDOM from "react-dom";
import TopRatedWindow from "./TopRatedWindow";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <TopRatedWindow />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
