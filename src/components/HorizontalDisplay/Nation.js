import React from "react";
import { Link } from "react-router-dom";
import "./Horizontal.css";
import Context from "../../Context";

export default class Nation extends React.Component {
  static contextType = Context;

  render() {
    const { nation } = this.props.match.params;

    if (nation === "American") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div className="selectedFood">
            <h1>Hello here is a list of you prefered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }

    if (nation === "Chinese") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "French") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "FastFood") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }

    if (nation === "Greek") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "Indian") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "Italian") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "Japanese") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }

    if (nation === "Mexican") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "MEastern") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }

    if (nation === "Thai") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
    if (nation === "Other") {
      const wehaveit = this.context.restaurants.filter(
        (list) => list.type === nation
      );
      if (wehaveit.length === 0) {
        return (
          <div className="notInArea">
            <h1>Sorry we don't have that type of food in your area.</h1>
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      } else {
        const restaurantList = this.context.restaurants
          .filter((list) => list.type === nation)
          .map((list2) => (
            <div key={list2.id} className="nation">
              <Link to={`/vendor/${list2.id}`}>{list2.name}</Link>
            </div>
          ));

        return (
          <div>
            <h1>Hello here is a list of you preffered restaurants</h1>
            {restaurantList}
            <Link to={"/food"}>
              <button>Go Back to Main Page</button>
            </Link>
          </div>
        );
      }
    }
  }
}
