import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Header from "./components/Header/Header";
import Horizontal from "./components/HorizontalDisplay/HorizontalDisplay";

class App extends Component {
  state = {};

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path={"/"} component={Header}></Route>
          <Route path={"/"} component={Horizontal}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
