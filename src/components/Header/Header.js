import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";

import Context from "../../Context";

export default class Header extends React.Component {
  static contextType = Context;
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <div className="restLogin">
          <Link to="/loginRest">Restaurants Log in here</Link>{" "}
        </div>
        <div className="register">
          <Link to="/registration">Register</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <header className="headerstyling">
        <div className="hambu">
          <Link id="hambu" to="/food">
            &#9776;
          </Link>
        </div>

        <Link className="logo" to="/food">
          Geta-Meal
        </Link>
        <div className="nav">
          <div className="restlogin">
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </div>
      </header>
    );
  }
}
