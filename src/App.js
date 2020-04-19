import React from "react";
import ReactDOM from "react-dom";
import BasketContext from "./BasketContext";
import Firebase, { FirebaseContext } from "./Firebase";
import { Router } from "@reach/router";
import "./App.scss";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basket: [], handleBasketChange: this.handleBasketChange };
  }

  handleBasketChange = (basketItem) => {
    const filtered = this.state.basket.filter(
      (good) => good.id == basketItem.id
    );
    if (filtered.length == 0) {
      this.setState({
        basket: this.state.basket.concat(basketItem),
      });
    }
  };

  render = () => {
    return (
      <BasketContext.Provider
        value={{
          basket: this.state.basket,
          handleBasketChange: this.state.handleBasketChange,
        }}
      >
        <Router>
          <Home path="/" />
          <About path="about" />
        </Router>
      </BasketContext.Provider>
    );
  };
}

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
