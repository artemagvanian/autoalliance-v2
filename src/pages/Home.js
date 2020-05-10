import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HomeCarousel from "../HomeCarousel";
import Header from "../Header";
import Footer from "../Footer";
import BigNavigation from "../BigNavigation";
// import GoodsList from "../GoodsList";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <BigNavigation />
        <Container>
          <h2 className="text-center">Наши услуги</h2>
        </Container>
        <HomeCarousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
