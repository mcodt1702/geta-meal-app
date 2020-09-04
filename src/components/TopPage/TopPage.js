import React, { Component } from "react";
import Context from "../../Context";
import "./TopPage.css";

export default class TopPage extends Component {
  static contextType = Context;
  render() {
    return (
      <div id="topPage">
        <h2>TOP RATED</h2>
        <ul>
          {this.context.restaurant.map((rest) => (
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
