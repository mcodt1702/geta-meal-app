import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./Orders.css";
import Context from "../../Context";

export default class Orders extends React.Component {
  static contextType = Context;
  render() {
    let orders = this.context.orders;
    return "jdjdj";
  }
}
