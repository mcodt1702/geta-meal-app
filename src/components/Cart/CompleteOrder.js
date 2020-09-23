import React, { Component } from "react";
import Context from "../../Context";

//complete order steps
//get order_id
//createOrder
//filter order_items
//display

export default class CompleteOrder extends Component {
  static contextType = Context;

  render() {
    const { id } = this.props.match.params;

    const orderplaced = this.context.orderItems
      .filter((items) => items.order_id === id)
      .map((list) => (
        <div key={id}>
          <ul>
            <li>{list.dish_id}</li>
          </ul>
        </div>
      ));
    console.log(orderplaced);
    return (
      <div>
        {" "}
        <h1>Your order has been placed</h1>
        {orderplaced}
      </div>
    );
  }
}
