import React from "react";
import { Container } from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BigNavigation from "../components/BigNavigation";

import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="Автоальянс" />
      <Header />
      <BigNavigation />
      <Container>
        <h2 className="text-center">Наши услуги</h2>
      </Container>
      <HomeCarousel />
      <Footer />
    </>
  );
};

export default Home;
