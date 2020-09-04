import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./AddMenuItems.css";
import Context from "../../Context";
import ValidationError from "../../utilities/validationError";

export default class renderUser extends React.Component {
  static contextType = Context;

  render() {
    return <div>Hello Im the menu</div>;
  }
}
