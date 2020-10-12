import React from "react";
import ReacDom from "reac-dom";
import App from "../src/App";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReacDom.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
