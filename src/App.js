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
import LoginPage from "./routes/LoginPage";
import PrivateRoute from "./utilities/PrivateRoute";
import Restaurant from "./components/Restaurant/Restaurant";
import Dashboard from "./components/Dashboard/Dashboard";
import AddMenuItems from "./components/Dashboard/AddMenuItems";

class App extends Component {
  state = {
    restaurant: [
      {
        id: 1,
        name: "Joe's Pizza",
        address: "2020 marine rd",
        zip: 12099,
        phone: "(918)555-5511",
        username: "joe@pizza.com",
        password: "joe33",
        type: "Italian",
      },
      {
        id: 2,
        name: "Larrys Pizza",
        address: "1809 Seaside rd",
        zip: 12099,
        phone: "(918)555-8900",
        username: "larry@larrpizza.com",
        password: "lar11",
        type: "American",
      },
      {
        id: 3,
        name: "Baja Tacos",
        address: "1809 Oak ave",
        zip: 12095,
        phone: "(918)333-5500",
        username: "bajatacos@tacos.com",
        password: "tac44",
        type: "Mexican",
      },
    ],
    menu: [
      {
        id: 1,
        provider_id: 2,
        item: "Spaguetti Carbonara",
        description:
          "Spaguetti in a white creamy sauce with bits of bacon and onions",
        price: 14.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 1,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
      {
        id: 2,
        provider_id: 3,
        item: "Tacos Baja",
        description:
          "Shrimp Tacos on a corn tortilla with cheese, guacamole and veggies",
        price: 15.99,
      },
    ],

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
          <Route exact path={"/"} component={Type}></Route>
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
          <PrivateRoute
            exact
            path={"/restaurant/dashboard/:id"}
            component={Dashboard}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path={"/restaurant/dashboard/:id/additems"}
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
