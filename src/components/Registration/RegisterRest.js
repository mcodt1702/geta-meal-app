import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./Registration.css";
import Context from "../../Context";

export default class renderUser extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  static contextType = Context;

  state = { error: null };

  handleSubmitUser = (ev) => {
    ev.preventDefault();
    const { name, address, zip, phone, email, password, type } = ev.target;

    console.log("registration form submitted");
    console.log({ name, address, zip, phone, email, password, type });

    name.value = "";
    address.value = "";
    zip.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    type.value = "";
    this.context.onRegistrationSuccess();
  };
  render() {
    return (
      <form form id="userform">
        <div className="name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>

        <div className="email">
          <label htmlFor="RegistrationForm__email">
            User name <Required />
          </label>
          <Input
            name="email"
            type="text"
            required
            id="RegistrationForm__email"
          ></Input>
        </div>

        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <div className="address">
          <label htmlFor="RegistrationForm__address">Address</label>
          <Input
            name="address"
            type="text"
            required
            id="RegistrationForm__address"
          ></Input>
        </div>
        <div className="zip">
          <label htmlFor="RegistrationForm__zip">Zip</label>
          <Input
            name="zip"
            type="text"
            required
            id="RegistrationForm__zip"
          ></Input>
        </div>
        <div className="phone">
          <label htmlFor="RegistrationForm__phone">Phone</label>
          <Input
            name="phone"
            type="text"
            required
            id="RegistrationForm__phone"
          ></Input>
        </div>
        <div className="type">
          <label htmlFor="RegistrationForm__type">Type: </label>
          <select name="type" type="text" required id="RegistrationForm__type">
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>

            <option value="French">French</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="American">American</option>
          </select>
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}
