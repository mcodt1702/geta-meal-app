import React, { Component } from "react";
import Context from "../../Context";

export default class Restaurant extends Component {
  static contextType = Context;
  render() {
    return (
      <div id="rest">
        <h2>{this.context.restaurant.name} Menu</h2>
        <ul>
          {this.context.menu.map((rest) => (
            <li key={rest.id}>
              <div className="prov">
                <ul>
                  <li>{rest.name} </li>
                  <li>{rest.address}</li>
                  <li>{rest.phone}</li>
                  <li>{rest.type}</li>
                </ul>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
