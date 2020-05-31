import React from "react";
import Header from "../components/Header";
import GoodsList from "../components/GoodsList";
import Footer from "../components/Footer";

const Goods = () => (
  <div>
    <Header />
    <GoodsList category="Толщиномеры" />
    <Footer />
  </div>
);

export default Goods;
