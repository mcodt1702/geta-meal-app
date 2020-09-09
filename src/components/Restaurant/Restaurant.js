import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

export default class Restaurant extends Component {
  static contextType = Context;

  render() {
    let { restaurant } = this.context;
    let id = this.props.match.params.id;

    const venue = restaurant
      .filter((rest) => rest.id === parseInt(id))
      .map((rest) => (
        <div key={id}>
          <h3>Menu for {rest.name}</h3>
          <ul key={id}>
            {" "}
            <li>{rest.address}</li>
            <li>{rest.phone}</li>
            <li>{rest.type}</li>
          </ul>
        </div>
      ));
    let menus = this.context.menu;

    const menuItems = menus
      .filter((item) => item.provider_id === parseInt(id))
      .map((food) => (
        <div key={food.id}>
          <li>{food.item}</li>
          <li>{food.description}</li>
          <li>{food.price} </li>
          <button onClick={() => this.context.addItemToOrder(food)}>
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
        <Link to={`restaurant/users/order/${id}`}>
          <button>Place order</button>
        </Link>
      </div>
    );
  }
}
