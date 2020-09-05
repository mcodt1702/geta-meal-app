import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";
export default class Restaurant extends Component {
  static contextType = Context;

  render() {
    let { restaurant, menu } = this.context;
    let id = this.props.match.params.id;

    const venue = restaurant
      .filter((rest) => rest.id === parseInt(id))
      .map((rest) => (
        <div>
          <h3>{rest.name}</h3>
          <ul>
            {" "}
            <li>{rest.address}</li>
            <li>{rest.phone}</li>
            <li>{rest.type}</li>
          </ul>
        </div>
      ));

    const menuSelection = menu.map((men) => (
      <div className="menuitems">
        <ul>
          <li>{men.item}</li>
          <li>{men.description}</li>
          <li>{men.price}</li>
        </ul>
      </div>
    ));

    return (
      <div id="rest">
        <h2>Account Profile</h2>
        {venue}
        {menuSelection}
        <Link to={`restaurant/dashboard/${id}/additems`}>
          <button>Add Item to Menu</button>
        </Link>
      </div>
    );
  }
}
