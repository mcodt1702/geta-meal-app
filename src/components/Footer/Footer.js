import React from "react";

import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footerstyling">
        <h2>About Geta-Meal</h2>
        <div className="about">
          We are a local New York Company focused on the delivery of food from
          local vendors in the five boroughs.
        </div>
      </footer>
    );
  }
}
