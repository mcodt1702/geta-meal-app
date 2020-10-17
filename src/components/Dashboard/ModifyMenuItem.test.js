import React from "react";
import ReactDOM from "react-dom";
import ModifyMenuItem from "./ModifyMenuItem";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ModifyMenuItem />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
