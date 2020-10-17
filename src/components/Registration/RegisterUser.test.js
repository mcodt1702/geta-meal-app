import React from "react";
import ReactDOM from "react-dom";
import RegisterUser from "./RegisterUser";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <RegisterUser />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
