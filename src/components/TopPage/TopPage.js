import React, { Component } from "react";

import "./TopPage.css";
import data from "../../../src/data/data";

export default class TopPage extends Component {
  render() {
    return (
      <div id="topPage">
        <h2>TOP RATED</h2>
        <ul>
          {data.map((rest) => (
            <li key={rest.id}>
              <div className="prov">
                <ul>
                  <li>{rest.name} </li>
                  <li>{rest.address}</li>
                  <li>{rest.phone}</li>
                </ul>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
