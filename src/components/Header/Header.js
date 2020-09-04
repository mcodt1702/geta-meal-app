import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";
import { Hyph } from "../../utilities/utilities";

export default class Header extends React.Component {
  handleLogoutClick = () => {};

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
        {<Hyph />}
        <Link to="/restaurant/dashboard">Account</Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/registration">Register</Link>
        {<Hyph />}
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <header className="headerstyling">
        <div className="hambu">
          <a id="nav-toggle" href="./menu">
            &#9776;
          </a>
        </div>

        <Link className="logo" to="/">
          Geta-Meal
        </Link>
        <nav>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}
