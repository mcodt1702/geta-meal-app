import React from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import "./LandingPage.css";

export default class LandingPage extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className="landing">
        <div>
          <h1>Get the food you crave delivered to your door!</h1>
        </div>
        <Link to={`/registration`}>
          <div id="gStarted">GET STARTED!</div>
        </Link>
        <Link to={"/login"}>
          <div id="gStarted">Sign In</div>
        </Link>
      </div>
    );
  }
}
