import React from "react";
import { Link } from "react-router-dom";
import "./MainDisplay.css";
import Deals from "../Deals/Deals";
import TopRatedWindow from "../TopRatedWindow/TopRatedWIndow";

export default class Main extends React.Component {
  render() {
    return (
      <section className="mainDisplay">
        <div className="container1">
          <Link to="/topRated">
            <TopRatedWindow />
          </Link>
        </div>

        <div className="container2">
          <Link to="/deals">
            <Deals />
          </Link>
        </div>
      </section>
    );
  }
}
