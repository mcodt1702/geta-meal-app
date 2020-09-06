import React from "react";

import "./Horizontal.css";
import Context from "../../Context";
import { Link } from "react-router-dom";

export default class Type extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div id="menu-outer">
        <div className="table">
          <ul id="horizontal-list">
            <li>
              <Link to="/typeAmerican">AMERICAN</Link>
            </li>
            <li>
              <Link to="/typeChinese">CHINESE</Link>
            </li>
            <li>
              <Link to="/typeFrench">FRENCH</Link>
            </li>
            <li>
              <Link to="/typeFastFood">FAST FOOD</Link>
            </li>
            <li>
              <Link to="/typeGreek">GREEK</Link>
            </li>
            <li>
              <Link to="/typeIndian">INDIAN</Link>
            </li>
            <li>
              <Link to="/typeItalian">ITALIAN</Link>
            </li>
            <li>
              <Link to="/typeJapanese">JAPANESE</Link>
            </li>
            <li>
              <Link to="/typeMexican">MEXICAN</Link>
            </li>
            <li>
              <Link to="/typeMEastern">MIDDLE EASTERN</Link>
            </li>
            <li>
              <Link to="/typeThai">THAI</Link>
            </li>
            <li>
              <Link to="/typeOther">OTHER</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
