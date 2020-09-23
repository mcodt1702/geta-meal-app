import React, { Component } from "react";
import Context from "../../Context";

export default class Cart extends Component {
  static contextType = Context;
  render() {
    const { cartItems } = this.context;

    return (
      <>
        <div className="countHeader">
          {cartItems.length === 0 ? (
            <div>Your Order has no items{cartItems.items}</div>
          ) : (
            <div>You have {cartItems.length} items in your order</div>
          )}
        </div>

        <div className="listOfItems">
          <ul>
            {cartItems.map((items) => (
              <li key={items.id}>
                <div>{items.item}</div>
                <div>
                  {items.price}x{items.count}
                </div>
                <button
                  onClick={() => this.context.removeItemfromOrder(items.id)}
                >
                  Remove item
                </button>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="total">
            Total= ${cartItems.reduce((a, c) => a + c.price * c.count, 0)}
          </div>
        )}
      </>
    );
  }
}
