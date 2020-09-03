import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Header from "./components/Header/Header";
import Horizontal from "./components/HorizontalDisplay/HorizontalDisplay";
import Main from "./components/MainDisplay/MainDisplay";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterRestaurant from "./components/Registration/RegisterRest";
import TopPage from "./components/TopPage/TopPage";
import LoginPage from "./routes/LoginPage";

class App extends Component {
  state = {
    users: [],
    restaurant: [],
    menu: [],

    createUser: (e, history) => {
      e.preventDefault();

      let newUser = {
        name: e.target.name.value,
        address: e.target.address.value,
        zip: e.target.zip.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      console.log(newUser);
      this.setState(
        {
          users: [...this.state.users, newUser],
        },
        // () => {
        //   fetch("http://localhost:9090/users", {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newUser),
        //   }).then((res) => res.json());
        // },

        () => {
          history.push("/");
        }
      );
    },

    createRestaurant: (e, history) => {
      e.preventDefault();

      let newRestaurant = {
        name: e.target.name.value,
        address: e.target.address.value,
        zip: e.target.zip.value,
        email: e.target.email.value,
        password: e.target.password.value,
        type: e.target.type.value,
      };
      console.log(newRestaurant);
      this.setState(
        {
          restaurant: [...this.state.restaurant, newRestaurant],
        },
        // () => {
        //   fetch("http://localhost:9090/users", {
        //     method: "post",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(newUser),
        //   }).then((res) => res.json());
        // },

        () => {
          history.push("/");
        }
      );
    },

    handleRegistrationSuccess: (user) => {
      const { history } = this.props;
      history.push("/login");
    },
  };

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
          <Route path={"/registration"} component={Registration}></Route>
          <Route exact path={"/register/user"} component={RegisterUser}></Route>
          <Route
            exact
            path={"/register/restaurant"}
            component={RegisterRestaurant}
          ></Route>
          <Route path={"/"} component={Footer}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
