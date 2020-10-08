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
import LandingPage from "./components/LandingPage/landingPage";
import Login from "./components/Login/Login";
import PrivateRoute from "./utilities/PrivateRoute";
import Restaurant from "./components/Restaurant/Restaurant";
import Dashboard from "./components/Dashboard/Dashboard";
import AddMenuItems from "./components/Dashboard/AddMenuItems";
import TokenService from "./services/token-service";
import Orders from "./components/Orders/Orders";
import ModifyMenuItem from "./components/Dashboard/ModifyMenuItem";
import CompleteOrder from "./components/Cart/CompleteOrder";
import Nation from "./components/HorizontalDisplay/Nation";
import LoginRestaurant from "./components/Login/LoginRestaurant";
import DealsPage from "./components/Deals/DealsPage";
import Config from "./config";

const { API_ENDPOINT } = Config;

class App extends Component {
  state = {
    restaurants: [],
    menu: [],
    orders: [],
    cartItems: [],
    orderItems: [],
    user_type: null,
    users: [],
    tempOrders: [],
    numOfCartItems: 0,
    numOfCompleted: 0,
    currentUserId: [],

    createUser: (e, history) => {
      e.preventDefault();

      let newUser = {
        name: e.target.name.value,
        address: e.target.address.value,
        zip: e.target.zip.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        password: e.target.password.value,
      };
      console.log(newUser);
      fetch(
        `${API_ENDPOINT}/consumers`,

        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "There was a problem coneectig to the server. We can't create a new Order"
            ); // throw an error
          }

          return res.json();
        })
        .then((newUser) => {
          this.setState(
            {
              users: [...this.state.users, newUser],
            },
            () => {
              window.location.replace("/");
            }
          );
        });
    },

    createRestaurant: (e, history) => {
      e.preventDefault();

      let newRestaurant = {
        id: this.state.restaurants.length + 1,
        name: e.target.name.value,
        address: e.target.address.value,
        zip: e.target.zip.value,
        email: e.target.email.value,
        password: e.target.password.value,
        phone: e.target.phone.value,
        type: e.target.type.value,
      };
      console.log(newRestaurant);

      fetch(`${API_ENDPOINT}/providers`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `basic ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(newRestaurant),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "There was a problem coneectig to the server. We can't create a new Order"
            ); // throw an error
          }

          return res.json();
        })
        .then((newRestaurant) => {
          this.setState(
            {
              restaurants: [...this.state.restaurants, newRestaurant],
            },
            () => {
              history.push("/restaurant/dashboard");
            }
          );
        })
        .catch((err) => {
          alert(
            "There was a problem coneectig to the server. We can't create a new Restaurant",
            err
          );
        });
    },

    addItemToCart: (food) => {
      const cartItems = this.state.cartItems.slice();
      let alreadyInOrder = false;

      cartItems.forEach((item) => {
        if (item.id === food.id) {
          item.count++;
          alreadyInOrder = true;
        }
      });
      if (!alreadyInOrder) {
        cartItems.push({ ...food, count: 1 });
      }
      this.setState({ cartItems });
    },

    removeItemfromOrder: (id) => {
      const idp = parseInt(id);
      this.setState({
        cartItems: this.state.cartItems.filter((item) => item.id !== idp),
      });
    },

    addOrderItem: (restaurant_id) => {
      // 1- I need to create an order and get back an order id
      //2-used that order id to create the item that needs to
      //be added to the order item
      //3- send the orderItem to the database
      //4- display the order after it was sent.
      let restaurant_idParsed = parseInt(restaurant_id);
      //how do I get the consumer ID from the login?*************************************************
      //********User adds first item to the order -> fetch POST to create a new order, put that in state, -> now I can add items to the cart.
      //5:19User adds first item to the order -> fetch POST to create a new order, put that in state, -> now I can add items to the cart.
      //Once the user places the order, now I can post all those order_items to the BE using the currentOrder’s Id*************************************************************************************
      //***
      let newOrder = {
        provider_id: restaurant_idParsed,
        status: "pending",
      };

      this.setState(
        {
          numOfCartItems: this.state.cartItems.length,
        },
        () => {
          fetch(
            `${API_ENDPOINT}/orders`,

            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${TokenService.getAuthToken()}`,
              },
              body: JSON.stringify(newOrder),
            }
          )
            .then((res) => {
              if (!res.ok) {
                throw new Error(
                  "There was a problem coneectig to the server. We can't create a new Order"
                ); // throw an error
              }

              return res.json();
            })
            .then((newOrder) => {
              const order_id = newOrder.id;
              console.log(order_id);
              this.state.cartItems.forEach((item) => {
                const dish_id = item.id;
                const quantity = item.count;

                let newOrderItem = {
                  order_id: `${order_id}`,
                  dish_id: `${dish_id}`,
                  qty: `${quantity}`,
                };

                console.log(newOrderItem);

                fetch(
                  `${API_ENDPOINT}/orderitems`,

                  {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newOrderItem),
                  }
                )
                  .then((res) => {
                    if (!res.ok) {
                      throw new Error(
                        "There was a problem coneectig to the server. We can't create a new Order"
                      ); // throw an error
                    }

                    return res.json();
                  })
                  .then((newOrderItem) => {
                    this.setState(
                      {
                        orderItems: [...this.state.orderItems, newOrderItem],
                      },
                      this.checkCompleted(order_id)
                    );
                  })
                  .catch((err) => {
                    alert(
                      "There was a problem connectig to order items server.",
                      err
                    );
                    console.log("Handling the error here.", err);
                  });
              });
              //this.createOrder(newOrderItem)
            })
            .catch((err) => {
              alert(
                "There was a problem connectig to the orders database.",
                err
              );
              console.log("Handling the error here.", err);
            });
        }
      );
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
      history.push("/loginRest");
    },

    handleLoginSuccess: (type, id) => {
      console.log(type);
      this.setState({
        user_type: type,
        currentUserId: id,
      });
      if (type.value === "provider") {
        window.location.replace(`/restaurant/dashboard/${id}`);
      } else {
        window.location.replace("/food");
      }
    },
  };
  //   updateStatus: (orderID) => {},
  // };

  checkCompleted = (order_id) => {
    this.setState(
      {
        numOfCompleted: this.state.numOfCompleted + 1,
      },
      () => {
        if (this.state.numOfCompleted >= this.state.numOfCartItems) {
          this.setState(
            {
              numOfCartItems: 0,
              numOfCompleted: 0,
              cartItems: [],
            },
            () => {
              window.location.replace(`/vendor/order/${order_id}`);
            }
          );
        }
      }
    );
  };
  componentDidMount() {
    fetch(`${API_ENDPOINT}/consumers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong"); // throw an error
        }
        return res;
      })
      .then((res) => res.json())
      .then((users) => this.setState({ users }))
      .catch((err) => {
        alert(
          "There was a problem connectig to the server getting consumers.",
          err
        );
        console.log("Handling the error here.", err);
      });

    fetch(`${API_ENDPOINT}/providers`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong getting providers"); // throw an error
        }
        return res;
      })
      .then((res) => res.json())
      .then((restaurants) => this.setState({ restaurants }))
      .catch((err) => {
        alert(
          "There was a problem connectig to the server getting providers.",
          err
        );
        console.log("Handling the error here.", err);
      });
    fetch(`${API_ENDPOINT}/dishes`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong"); // throw an error
        }
        return res;
      })
      .then((res) => res.json())
      .then((menu) => this.setState({ menu }))
      .catch((err) => {
        alert(
          "There was a problem connectig to the server getting restaurants.",
          err
        );
        console.log("Handling the error here.", err);
      });

    fetch(`${API_ENDPOINT}/orders`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong"); // throw an error
        }
        return res;
      })
      .then((res) => res.json())
      .then((orders) => this.setState({ orders }))
      .catch((err) => {
        alert("There was a problem connectig to the server.", err);
        console.log("Handling the error here.", err);
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <Route path={"/"} component={Header}></Route>
          <Route exact path={"/"} component={LandingPage}></Route>
          <PrivateRoute exact path={"/food"} component={Type}></PrivateRoute>
          <PrivateRoute exact path={"/food"} component={Main}></PrivateRoute>
          <Route path={"/topRated"} component={TopPage}></Route>
          <Route path={"/deals"} component={DealsPage}></Route>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/loginRest"} component={LoginRestaurant}></Route>
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
          <PrivateRoute
            exact
            path={"/vendor/order/:id"}
            component={CompleteOrder}
          ></PrivateRoute>

          <Route path={"/"} component={Footer}></Route>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
