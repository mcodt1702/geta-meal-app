import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className="headerstyling">
        <div className="hambu">
          <img src={require("../../images/icon.jpg")} alt="haburguer icon" />
        </div>

        <Link to="/">LOGO</Link>
        <nav>
          <Link to="/">Login</Link>
        </nav>
      </header>
    );
  }
}
