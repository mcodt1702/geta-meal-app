import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import Header from "./components/Header/Header";
import Type from "./components/HorizontalDisplay/Type";
import Main from "./components/MainDisplay/MainDisplay";
import Registration from "./components/Registration/Registration";
import Footer from "./components/Footer/Footer";
import RegisterUser from "./components/Registration/RegisterUser";
import RegisterRestaurant from "./components/Registration/RegisterRest";
import TopPage from "./components/TopPage/TopPage";
import Login from "./components/Login/Login";
import PrivateRoute from "./utilities/PrivateRoute";
import Restaurant from "./components/Restaurant/Restaurant";
import Dashboard from "./components/Dashboard/Dashboard";
import AddMenuItems from "./components/Dashboard/AddMenuItems";
import restaurantData from "./data/restUsers";
import menuData from "./data/menu.js";

const testUser = {
  id: 1,
  email: "test@test.com",
  address: "1234 Main Street",
  zip: "11106",
  phone: "123-456-7990",
};

class App extends Component {
  state = {
    restaurant: restaurantData,
    menu: menuData,
    user_type: null,
    user: {},

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
    },

    createRestaurant: (e, history) => {
      e.preventDefault();

      let newRestaurant = {
        id: this.state.restaurant.lenght + 1,
        name: e.target.name.value,
        address: e.target.address.value,
        zip: e.target.zip.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        type: e.target.type.value,
      };
      console.log(newRestaurant);
    },

    addItemtoMenu: (e) => {
      console.log("adding items");
    },

    handleRegistrationSuccess: (user) => {
      const { history } = this.props;
      history.push("/login");
    },

    handleLoginSuccess: (user_type) => {
      this.setState({
        user_type,
        user: user_type === "user" ? testUser : restaurantData[0],
      });
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path={"/"} component={Header}></Route>
          <Route exact path={"/"} component={Type}></Route>
          <Route exact path={"/"} component={Main}></Route>
          <Route path={"/topRated"} component={TopPage}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/registration"} component={Registration}></Route>
          <Route exact path={"/register/user"} component={RegisterUser}></Route>
          <Route
            exact
            path={"/register/restaurant"}
            component={RegisterRestaurant}
          ></Route>
          <PrivateRoute
            exact
            path={"/restaurant/dashboard"}
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path={"/restaurant/dashboard/additems/:id"}
            component={AddMenuItems}
          ></PrivateRoute>

          <Route exact path={"/restaurant/:id"} component={Restaurant}></Route>
          <Route path={"/"} component={Footer}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
