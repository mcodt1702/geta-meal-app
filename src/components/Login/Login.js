import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Button, Input } from "../../utilities/utilities";
import Context from "../../Context";
import "./Login.css";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();

    const { user_name, password, user_type } = ev.target;
    console.log(user_name);
    const restaurant = this.context.restaurant;
    const validated = restaurant.filter(
      (valid) => valid.username == user_name.value
    );
    console.log(validated);
    if (validated.length > 0) {
      TokenService.saveAuthToken(
        TokenService.makeBasicAuthToken(user_name.value, password.value)
      );

      user_name.value = "";
      password.value = "";
      this.context.handleLoginSuccess(user_type.value);
      this.props.history.push(
        user_type.value === "rest" ? "/restaurant/dashboard" : "/"
      );
    }

    this.setState({ error: "Invalid Credentials" });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="LoginPage">
        <h2>Login</h2>
        <form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <p>REVIEWER USE= username: joe@pizza.com, password: 1</p>
          <p>
            <input
              type="radio"
              name="user_type"
              value="user"
              id="user_type_user"
              defaultChecked
            />
            <label htmlFor="user_type_user">User</label>
            <input
              type="radio"
              name="user_type"
              value="rest"
              id="user_type_rest"
            />
            <label htmlFor="user_type_rest">Restaurant</label>
          </p>
          <div className="user_name">
            <label htmlFor="LoginForm__user_name">User name</label>
            <Input required name="user_name" id="LoginForm__user_name"></Input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm__password">Password</label>
            <Input
              required
              name="password"
              type="password"
              id="LoginForm__password"
            ></Input>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </section>
    );
  }
}
