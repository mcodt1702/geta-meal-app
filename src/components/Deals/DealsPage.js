import React, { Component } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./Deals.css";

export default class Deals extends Component {
  static contextType = Context;
  render() {
    return (
      <div id="topPage">
        <h2>Deals</h2>
        <ul>
          {this.context.restaurants.map((rest) => (
            <li key={rest.id}>
              <div className="prov">
                <Link to={`vendor/${rest.id}`}>
                  {" "}
                  <ul>
                    <li>{rest.name}</li>
                    <li>{rest.address}</li>
                    <li>{rest.phone}</li>
                    <li>{rest.type}</li>
                  </ul>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
