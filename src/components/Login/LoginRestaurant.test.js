import React from "react";
import ReactDOM from "react-dom";
import LoginRestaurant from "./LoginRestaurant";

import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <LoginRestaurant />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
