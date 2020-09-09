import React, { Component } from "react";
import Context from "../../Context";

export default class Cart extends Component {
  static contextType = Context;
  render() {
    const { orderItems } = this.context;

    return (
      <div>
        {orderItems.length === 0 ? (
          <div>Your Order has no items</div>
        ) : (
          <div>You have {orderItems.length} items in your order</div>
        )}
      </div>
    );
  }
}
