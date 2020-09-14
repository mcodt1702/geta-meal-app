import React from "react";
import { Link } from "react-router-dom";
import "./Horizontal.css";
import Context from "../../Context";

export default class Nation extends React.Component {
  static contextType = Context;

  render() {
    const { nation } = this.props.match.params;
    console.log(nation);

    if (nation === "American") {
      const restaurantList = this.context.restaurants
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }
    if (nation === "Chinese") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }
    if (nation === "French") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "FastFood") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Greek") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Indian") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }
    if (nation === "Italian") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Japanese") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Mexican") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "MEastern") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            <Link to={"/"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Thai") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }

    if (nation === "Other") {
      const restaurantList = this.context.restaurant
        .filter((list) => list.type === nation)
        .map((list2) => (
          <div>
            <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
          </div>
        ));

      return (
        <div>
          <h1>Hello here is a list of you preffered restaurants</h1>
          {restaurantList}
          <Link to={"/"}>
            <button>Go Back to Main Page</button>
          </Link>
        </div>
      );
    }
  }
}
