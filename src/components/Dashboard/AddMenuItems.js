import React from "react";
import { Button, Input, Required } from "../../utilities/utilities";
import "./AddMenuItems.css";
import Context from "../../Context";
import ValidationError from "./../../utilities/validationError";

export default class renderUser extends React.Component {
  static contextType = Context;
  constructor() {
    super();

    this.state = {
      item: { value: "", touched: false },

      description: { value: "", touched: false },

      price: { value: "", touched: false },
    };
  }
  itemUpdate(item) {
    this.setState({ item: { value: item, touched: true } });
  }

  validateItem() {
    const item = this.state.item.value.trim();
    if (item.length === 0) {
      return "Name is required";
    } else if (item.length < 4) {
      return "You need at least 3 characters";
    }
  }

  validateDescription() {
    const description = this.state.description.value.trim();
    if (description.length === 0) {
      return "Please give a bried description of the item added";
    } else if (description.length < 4) {
      return "You need at least 3 characters";
    }
  }

  descriptionUpdate(description) {
    this.setState({ description: { value: description, touched: true } });
  }

  priceUpdate(price) {
    this.setState({ price: { value: price, touched: true } });
  }

  validatePrice() {
    const price = this.state.price.value.trim();
    if (price.length === 0) {
      return "Please set a price for your item";
    }
  }

  render() {
    return (
      <form
        onSubmit={(e) =>
          this.context.addItemtoMenu(e, this.props.match.params.id)
        }
        id="userform"
      >
        <div>
          Hello please fill out the form to add another item to your menu
        </div>
        <div className="item">
          <label htmlFor="RegistrationForm__full_item">
            Item Name <Required />
          </label>
          <Input
            name="item"
            type="text"
            placeholder="Item Name"
            value={this.state.item.value}
            onChange={(e) => this.itemUpdate(e.target.value)}
            required
          ></Input>
          {this.state.item.touched && (
            <ValidationError message={this.validateItem()} />
          )}
        </div>

        <div className="description">
          <label htmlFor="AddItemForm__description">
            Description <Required />
          </label>
          <Input
            name="description"
            type="text"
            placeholder="description"
            value={this.state.description.value}
            onChange={(e) => this.descriptionUpdate(e.target.value)}
            required
          ></Input>
          {this.state.description.touched && (
            <ValidationError message={this.validateDescription()} />
          )}
        </div>

        <div className="price">
          <label htmlFor="AddItemForm__price">
            Price <Required />
          </label>
          <Input
            name="price"
            type="text"
            placeholder="$0.00"
            value={this.state.price.value}
            onChange={(e) => this.priceUpdate(e.target.value)}
            required
          ></Input>
          {this.state.price.touched && (
            <ValidationError message={this.validatePrice()} />
          )}
        </div>
        <Button type="submit" id="submit">
          Add Item to Menu
        </Button>
      </form>
    );
  }
}
