import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./Registration.css";
import Context from "../../Context";
import ValidationError from "./../../utilities/validationError";

export default class renderUser extends React.Component {
  static contextType = Context;

  constructor() {
    super();

    this.state = {
      name: { value: "", touched: false },

      email: { value: "", touched: false },

      password: { value: "", touched: false },

      phone: { value: "", touched: false },
    };
  }

  nameUpdate(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 4) {
      return "You need at least 3 characters";
    }
  }
  emailUpdate(email) {
    this.setState({ email: { value: email, touched: true } });
  }
  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required";
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return "You have entered an invalid email address!";
  }

  passwordUpdate(password) {
    this.setState({ password: { value: password, touched: true } });
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (/^[A-Za-z]\w{7,14}$/.test(password)) {
      return true;
    }
    return "Use a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!       ";
  }

  phoneUpdate(phone) {
    this.setState({ phone: { value: phone, touched: true } });
  }

  validatePhone() {
    const phone = this.state.phone.value.trim();
    if (phone.length === 0) {
      return "Phone number is required";
    } else if (
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)
    ) {
      return true;
    }
    return "Please use a 7 digit US phone format eg 555-543-1234  ";
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.context.createRestaurant(e, this.props.history)}
        id="userform"
      >
        <div className="name">
          <label htmlFor="RegistrationForm__full_name">
            Restaurant name <Required />
          </label>
          <Input
            name="name"
            type="text"
            placeholder="Restaurant Name"
            value={this.state.name.value}
            onChange={(e) => this.nameUpdate(e.target.value)}
            required
          ></Input>
          {this.state.name.touched && (
            <ValidationError message={this.validateName()} />
          )}
        </div>

        <div className="email">
          <label htmlFor="RegistrationForm__email">
            Email <Required />
          </label>
          <Input
            name="email"
            type="text"
            placeholder="email@email.com"
            value={this.state.email.value}
            onChange={(e) => this.emailUpdate(e.target.value)}
            required
          ></Input>
          {this.state.email.touched && (
            <ValidationError message={this.validateEmail()} />
          )}
        </div>

        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            placeholder="one numeric digit, uppercase and lowercase letters "
            value={this.state.password.value}
            onChange={(e) => this.passwordUpdate(e.target.value)}
            required
          ></Input>
          {this.state.password.touched && (
            <ValidationError message={this.validatePassword()} />
          )}
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
            placeholder="555-543-1234"
            value={this.state.phone.value}
            onChange={(e) => this.phoneUpdate(e.target.value)}
            required
          ></Input>
          {this.state.phone.touched && (
            <ValidationError message={this.validatePhone()} />
          )}
        </div>
        <div className="type">
          <label htmlFor="RegistrationForm__type">Type: </label>
          <select name="type" type="text" required id="RegistrationForm__type">
            <optgroup>
              <option value="American">American</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Greek">Greek</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Mexican">Mexican</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Thai">Thai</option>
              <option value="Other">Other</option>
            </optgroup>
          </select>
        </div>
        <Button type="submit" id="submit">
          Register
        </Button>
      </form>
    );
  }
}
