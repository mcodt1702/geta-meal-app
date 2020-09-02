import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Header from "./components/Header/Header";
import Horizontal from "./components/HorizontalDisplay/HorizontalDisplay";
import Main from "./components/MainDisplay/MainDisplay";
import Footer from "./components/Footer/Footer";
import TopRated from "./components/TopRatedWindow/TopRatedWIndow";
import TopPage from "./components/TopPage/TopPage";
import LoginPage from "./routes/LoginPage";

class App extends Component {
  state = {};

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path={"/"} component={Header}></Route>
          <Route exact path={"/"} component={Horizontal}></Route>
          <Route exact path={"/"} component={Main}></Route>

          <Route path={"/topRated"} component={TopPage}></Route>
          <Route path={"/topRated"} component={TopPage}></Route>
          <Route path={"/login"} component={LoginPage}></Route>

          <Route path={"/"} component={Footer}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
