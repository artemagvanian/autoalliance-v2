import React from "react";
import Header from "../components/Header";
import CarList from "../components/CarList";
import Footer from "../components/Footer";

import SEO from "../components/SEO";

const Platform = () => (
  <>
    <SEO title="Автоплощадка" />
    <Header />
    <CarList />
    <Footer />
  </>
);

export default Platform;
