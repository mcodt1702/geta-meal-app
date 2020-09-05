import React from "react";

import "./AddMenuItems.css";
import Context from "../../Context";

export default class renderUser extends React.Component {
  static contextType = Context;

  render() {
    return <div>Hello Im the menu</div>;
  }
}
