import React from "react";
import ReactDOM from "react-dom";
import LandinPage from "./landingPage";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <LandinPage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
