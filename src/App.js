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
import Orders from "./components/Orders/Orders";
import ModifyMenuItem from "./components/Dashboard/ModifyMenuItem";
import CompleteOrder from "./components/Cart/CompleteOrder";
import Nation from "./components/HorizontalDisplay/Nation";
import UserAdmin from "./components/Admin/userAdmin";
import DealsPage from "./components/Deals/DealsPage";

const restTestUser = {
  id: 6,
  email: "test@test.com",
  address: "1234 Main Street",
  zip: "11106",
  phone: "123-456-7990",
};

const clientTestUser = {
  id: 2,
  email: "test@test.com",
  address: "1234 Main Street",
  zip: "11106",
  phone: "123-456-7990",
};

class App extends Component {
  state = {
    restaurant: restaurantData,
    menu: menuData,
    //orders: [{ id: 1, provider_id: 7, consumer_id: 1, status: "pending" }],
    orders: [],
    orderItems: [],
    user_type: null,
    user: 7,

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

    addItemToOrder: (food) => {
      const orderItems = this.state.orderItems.slice();
      let alreadyInOrder = false;

      orderItems.forEach((item) => {
        if (item.id === food.id) {
          item.count++;
          alreadyInOrder = true;
        }
      });
      if (!alreadyInOrder) {
        orderItems.push({ ...food, count: 1 });
      }
      this.setState({ orderItems });
    },

    removeItemfromOrder: (id) => {
      const idp = parseInt(id);
      this.setState({
        orderItems: this.state.orderItems.filter((item) => item.id !== idp),
      });
    },

    placeOrder: (history) => {
      const orderItems = this.state.orderItems.slice();
      const id = this.state.orders.length + 1;
      const orders = this.state.orders.slice();

      orderItems.forEach((item) => {
        const provider_id = item.provider_id;
        const quantity = item.count;
        const consumer_id = this.state.user;

        const newOrder = {
          id: `${id}`,
          consumer_id: `${consumer_id}`,
          provider_id: `${provider_id}`,
          quantity: `${quantity}`,
          status: "pending",
        };
        orders.push(newOrder);

        this.setState({ orders }, () => console.log(this.state.orders));
      });

      //history.push("/");
      this.state.pageRedirect();
    },
    pageRedirect: () => {
      window.location.replace("/vendor/order/sent");
    },
    addItemtoMenu: (e, history) => {
      e.preventDefault();
      let newItem = {
        id: this.state.menu.length + 1,
        provider_id: this.state.user.id,
        item: e.target.item.value,
        description: e.target.description.value,
        price: e.target.price.value,
      };
      console.log(newItem);
      this.setState({ menu: [...this.state.menu, newItem] });
      history.push("/restaurant/dashboard");
    },

    modifyItemtoMenu: (e, history) => {
      e.preventDefault();
      let modifiedItem = {
        item: e.target.item.value,
        description: e.target.description.value,
        price: e.target.price.value,
      };
      console.log(modifiedItem);
      history.push("/restaurant/dashboard");
    },

    deleteItemtoMenu: (id) => {
      console.log(id);
      this.setState({
        menu: this.state.menu.filter((item) => item.id !== id),
      });
    },
    handleRegistrationSuccess: (user) => {
      const { history } = this.props;
      history.push("/login");
    },

    handleLoginSuccess: (type) => {
      console.log(type);
      this.setState({
        user_type: type,
        user: type === "user" ? clientTestUser : restTestUser,
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
          <Route path={"/deals"} component={DealsPage}></Route>
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
          <PrivateRoute
            exact
            path={"/restaurant/dashboard/modify/:id"}
            component={ModifyMenuItem}
          ></PrivateRoute>
          <PrivateRoute
            exact
            path={"/restaurant/dashboard/orders"}
            component={Orders}
          ></PrivateRoute>
          <Route exact path={"/type/:nation"} component={Nation}></Route>
          <Route exact path={"/vendor/:id"} component={Restaurant}></Route>
          <Route
            exact
            path={"/vendor/order/:id"}
            component={CompleteOrder}
          ></Route>
          <Route
            exact
            path={"/vendor/order/sent"}
            component={UserAdmin}
          ></Route>
          <Route path={"/"} component={Footer}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
