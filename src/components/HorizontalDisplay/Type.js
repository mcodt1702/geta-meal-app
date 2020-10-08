import React from "react";

import "./Horizontal.css";
import Context from "../../Context";
import { Link } from "react-router-dom";

export default class Type extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div id="menu-outer">
        <div className="dropdown">
          <button className="dropbtn">CHOOSE A TYPE OF FOOD</button>
          <div className="dropdown-content">
            <ul>
              <li>
                <Link to="/type/American">AMERICAN</Link>
              </li>
              <li>
                <Link to="/type/Chinese">CHINESE</Link>
              </li>
              <li>
                <Link to="/type/French">FRENCH</Link>
              </li>
              <li>
                <Link to="/type/FastFood">FAST FOOD</Link>
              </li>
              <li>
                <Link to="/type/Greek">GREEK</Link>
              </li>
              <li>
                <Link to="/type/Indian">INDIAN</Link>
              </li>
              <li>
                <Link to="/type/Italian">ITALIAN</Link>
              </li>
              <li>
                <Link to="/type/Japanese">JAPANESE</Link>
              </li>
              <li>
                <Link to="/type/Mexican">MEXICAN</Link>
              </li>
              <li>
                <Link to="/type/MEastern">MIDDLE EASTERN</Link>
              </li>
              <li>
                <Link to="/type/Thai">THAI</Link>
              </li>
              <li>
                <Link to="/type/Other">OTHER</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="table">
          <ul id="horizontal-list"></ul>
        </div>
      </div>
    );
  }
}
