import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./Horizontal.css";
import Context from "../../Context";
import { Link } from "react-router-dom";

export default class Type extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div id="menu-outer">
        <div class="table">
          <ul id="horizontal-list">
            <li>
              <Link to="/typeChinese">AMERICAN</Link>
            </li>
            <li>
              <Link to="/typeChinese">CHINESE</Link>
            </li>
            <li>
              <Link to="/typeChinese">FRENCH</Link>
            </li>
            <li>
              <Link to="/typeChinese">FAST FOOD</Link>
            </li>
            <li>
              <Link to="/typeChinese">GREEK</Link>
            </li>
            <li>
              <Link to="/typeChinese">INDIAN</Link>
            </li>
            <li>
              <Link to="/typeChinese">ITALIAN</Link>
            </li>
            <li>
              <Link to="/typeChinese">JAPANESE</Link>
            </li>
            <li>
              <Link to="/typeChinese">MEXICAN</Link>
            </li>
            <li>
              <Link to="/typeChinese">MIDDLE EASTERN</Link>
            </li>
            <li>
              <Link to="/typeChinese">THAI</Link>
            </li>
            <li>
              <Link to="/typeChinese">OTHER</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
