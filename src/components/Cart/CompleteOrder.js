import React, { Component } from "react";
import Context from "../../Context";

export default class CompleteOrder extends Component {
  static contextType = Context;

  render() {
    const { id } = this.props.match.params;

    const orderplaced = this.context.orderItems
      .filter((items) => items.order_id === id)
      .map((list) => (
        <div key={id}>
          <ul>
            <li>{list.name}</li>
            <li>{list.description}</li>
            <li>{list.price}</li>
          </ul>
        </div>
      ));

    return (
      <div>
        {" "}
        <h1>Your order has been placed</h1>
        {orderplaced}
      </div>
    );
  }
}
