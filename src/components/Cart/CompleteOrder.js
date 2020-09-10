import React, { Component } from "react";
import Context from "../../Context";

export default class CompleteOrder extends Component {
  static contextType = Context;

  render() {
    const { orderItems } = this.context;

    console.log(orderItems);

    return <h1>Your order has been placed</h1>;
  }
}
