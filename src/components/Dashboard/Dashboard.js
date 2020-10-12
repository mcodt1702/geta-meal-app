import Context from "../../Context";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { restaurants } = this.context;
    const id = parseInt(this.props.match.params.id);

    const venue = restaurants
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

    const pastOrders = this.context.orders
      .filter((order) => order.provider_id === id)
      .map((orders) => (
        <div key={orders.id} className="ordersList">
          <li>
            Time Created:{orders.created} Order id: {orders.id}
          </li>

          <li>
            Status: {orders.status}
            <button onClick={() => this.context.updateStatus(orders.id)}>
              Update Status
            </button>
          </li>
        </div>
      ));

    return (
      <div id="rest">
        <h2>Account Profile</h2>
        <p>You can add items to your menu or check you orders here:</p>
        {venue}
        {menuItems}
        <Link to={`/restaurant/dashboard/additems/${id}/`}>
          <button>Add Item to Menu</button>
        </Link>
        {pastOrders}
      </div>
    );
  }
}
