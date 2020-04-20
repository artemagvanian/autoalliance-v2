import React, { Component } from "react";
import Header from "../Header";
import GoodsList from "../GoodsList";

export class Goods extends Component {
  render() {
    return (
      <div>
        <Header />
        <GoodsList category="Толщиномеры" />
      </div>
    );
  }
}

export default Goods;
