import React, { useState } from "react";
import ReactDOM from "react-dom";
import BasketContext from "./components/BasketContext";
import { Router } from "@reach/router";

import "./App.scss";

import Home from "./pages/Home";
import About from "./pages/About";
import Goods from "./pages/Goods";
import Services from "./pages/Services";
import Details from "./pages/Details";
import Platform from "./pages/Platform";
import Partners from "./pages/Partners";
import Avtoritet from "./pages/Avtoritet";
import NotFound from "./pages/NotFound";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://peseqqli.apicdn.sanity.io/v1/graphql/production/default",
});

const App = () => {
  const [basket, setBasket] = useState([]);

  const handleBasketChange = (basketItem) => {
    const filtered = basket.filter((good) => good.title == basketItem.title);
    if (filtered.length == 0) {
      setBasket(basket.concat(basketItem));
    }
  };

  return (
    <ApolloProvider client={client}>
      <BasketContext.Provider
        value={{
          basket,
          handleBasketChange,
        }}
      >
        <Router>
          <NotFound default />
          <Home path="/" />
          <About path="about" />
          <Goods path="goods" />
          <Services path="services" />
          <Details path="details/:goodId" />
          <Platform path="platform" />
          <Partners path="partners" />
          <Avtoritet path="avtoritet" />
        </Router>
      </BasketContext.Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
