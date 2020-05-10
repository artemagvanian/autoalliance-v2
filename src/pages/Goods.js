import React, { Component } from "react";
import Header from "../Header";
import GoodsList from "../GoodsList";
import Footer from "../Footer";

export class Goods extends Component {
  render() {
    return (
      <div>
        <Header />
        <GoodsList category="Толщиномеры" />
        <Footer />
      </div>
    );
  }
}

export default Goods;
