import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import GoodsList from "./GoodsList";
import BasketContext from "./BasketContext";
import "./App.scss";

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
        <Header />
        <GoodsList category="Толщиномеры" />
      </BasketContext.Provider>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
