import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Restaurant.css";

export default class Restaurant extends Component {
  static contextType = Context;
  static defaultProps = {
    match: { params: { id: 0 } },
  };
  render() {
    let { restaurants = [] } = this.context || [];
    const id = parseInt(this.props.match.params.id);

    const venue = restaurants
      .filter((rest) => rest.id === parseInt(id))
      .map((rest) => (
        <div className="restident" key={id}>
          <u>
            <h3>Menu for {rest.name}</h3>
          </u>
          <ul key={id}>
            {" "}
            <li>{rest.address}</li>
            <li>{rest.phone}</li>
            <li>{rest.type}</li>
          </ul>
          <hr></hr>
        </div>
      ));

    let menus = this.context ? this.context.menu : [];
    const menuItems = menus
      .filter((item) => item.provider_id === parseInt(id))
      .map((food) => (
        <div className="listdishes" key={food.id}>
          <li>Name: {food.name}</li>
          <li>Description: {food.description}</li>
          <li>Price: ${food.price} </li>
          <button onClick={() => this.context.addItemToCart(food)}>
            Add Item to Order
          </button>
        </div>
      ));

    return (
      <div id="rest">
        {venue}
        {menuItems}

        <Link to={`/topRated`}>
          <button>Back to Restaurants</button>
        </Link>
        <Cart />

        <button onClick={() => this.context.addOrderItem(id)}>
          Place order
        </button>
      </div>
    );
  }
}
