import React, { Component } from "react";
import { Button } from "../../utilities/utilities";
import "./Registration.css";
import { Link } from "react-router-dom";

export default class RegistrationForm extends Component {
  renderProvider() {}

  render() {
    return (
      <div className="registrationForm">
        <h2>Welcome to Geta-Meal's Registration</h2>
        <h3>Please tell us who you are</h3>
        <div className="regButton ">
          <Link className="user1" to="/register/user">
            <Button type="button" id="toUserForm">
              Register
            </Button>
          </Link>
        </div>
        <div className="regButton">
          <Link className="user2" to="/register/restaurant">
            <Button type="button" id="toUserForm">
              Register My Restaurant
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
