import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Button, Input } from "../../utilities/utilities";
import Context from "../../Context";
import "./Login.css";
import AuthApiService from "../../services/auth-api-service";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password, user_type } = ev.target;

    AuthApiService.postLogin({
      email: user_name.value,
      password: password.value,
      user_type: "consumer",
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.context.handleLoginSuccess(user_type, res.id);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <section className="LoginPage">
        <h2>Login</h2>
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <p>
            Demo Customer - <br />
            username: joe@pizza.com <br />
            password: P@ssword1234
          </p>

          <p>
            <input
              type="radio"
              name="user_type"
              value="consumer"
              id="user_type_user"
              defaultChecked
            />
            <label htmlFor="user_type_user">User</label>
          </p>
          <div className="user_name">
            <label htmlFor="LoginForm__user_name">Email</label>
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
