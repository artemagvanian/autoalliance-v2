import React from "react";
import Header from "../components/Header";
import GoodsList from "../components/GoodsList";
import Footer from "../components/Footer";

import SEO from "../components/SEO";

const Goods = () => (
  <>
    <SEO title="Каталог товаров" />
    <Header />
    <GoodsList category="Толщиномеры" />
    <Footer />
  </>
);

export default Goods;
