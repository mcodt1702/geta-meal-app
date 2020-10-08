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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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

    if (nation === "Chinese") {
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
      if (
        this.context.restaurants.filter(
          (list) => (list.type === nation.length) === 0
        )
      ) {
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
            <div key={list2.id}>
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
