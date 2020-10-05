import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import TokenService from "../../services/token-service";
import { Hyph } from "../../utilities/utilities";
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
        {/* {<Hyph />} */}
        {/* <Link to={`/restaurant/dashboard/${this.context.currentUserId}`}>
          Account
        </Link> */}
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
