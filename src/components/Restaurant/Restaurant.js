import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
export default class Restaurant extends Component {
  static contextType = Context;

  render() {
    let { restaurant } = this.context;
    let id = this.props.match.params.id;
    console.log(id);
    const venue = restaurant
      .filter((rest) => rest.id === parseInt(id))
      .map((rest) => (
        <div key={id}>
          <h3>{rest.name}</h3>
          <ul key={id}>
            {" "}
            <li>{rest.address}</li>
            <li>{rest.phone}</li>
            <li>{rest.type}</li>
          </ul>
        </div>
      ));
    let menus = this.context.menu;
    console.log(menus);
    const menuItems = menus
      .filter((item) => item.provider_id == parseInt(id))
      .map((food) => (
        <div key={food.id}>
          <li>{food.item}</li>
          <li>{food.description}</li>
          <li>{food.price}</li>
        </div>
      ));

    return (
      <div id="rest">
        <h2>Account Profile</h2>
        {venue}
        {menuItems}
        <Link to={`restaurant/dashboard/${id}/additems`}>
          <button>Add Item to Menu</button>
        </Link>
      </div>
    );
  }
}
