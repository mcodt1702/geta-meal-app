import React from "react";
import { Link } from "react-router-dom";
import "./MainDisplay.css";
import Deals from "../Deals/Deals";
import TopRated from "../TopRated/TopRated";

export default class Main extends React.Component {
  render() {
    return (
      <section className="mainDisplay">
        <div className="container">
          <Link to="/topRated">
            <TopRated />
          </Link>
        </div>

        <div className="container">
          <Link to="/deals">
            <Deals />
          </Link>
        </div>
      </section>
    );
  }
}
