import Context from "../../Context";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { restaurant } = this.context;
    let id = this.context.user.id;

    const venue = restaurant
      .filter((rest) => rest.id === parseInt(id))
      .map((rest) => (
        <div key={rest.id}>
          <h3>{rest.name}</h3>
          <ul>
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
        <div className="menuItem" key={food.id}>
          <li>{food.item}</li>
          <li>{food.description}</li>
          <li>{food.price}</li>
          <button onClick={() => this.context.deleteItemtoMenu(food.id)}>
            Delete
          </button>
          <Link to={`/restaurant/dashboard/modify/${food.id}`}>
            <button>Modify this item</button>
          </Link>
        </div>
      ));

    return (
      <div id="rest">
        <h2>Account Profile</h2>
        {venue}
        {menuItems}
        <Link to={`/restaurant/dashboard/additems/${id}/`}>
          <button>Add Item to Menu</button>
        </Link>
      </div>
    );
  }
}
