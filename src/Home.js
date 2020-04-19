import React, { Component } from "react";
import HomeCarousel from "./HomeCarousel";
import Header from "./Header";
import GoodsList from "./GoodsList";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeCarousel />
        <GoodsList category="Толщиномеры" />
      </div>
    );
  }
}

export default Home;
