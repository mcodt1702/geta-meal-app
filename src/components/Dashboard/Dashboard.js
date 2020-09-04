import React, { Component } from "react";
import Context from "../../Context";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  static contextType = Context;
  render() {
    let { restaurant } = this.context;
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

    return (
      <div id="rest">
        <h2>Account Profile</h2>
        {venue}
        <Link to={`restaurant/dashboard/${id}/additems`}>
          <button>Add Item to Menu</button>
        </Link>
      </div>
    );
  }
}
