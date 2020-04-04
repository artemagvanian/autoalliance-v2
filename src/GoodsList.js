import React from "react";
import { Container, Row } from "react-bootstrap";
import Good from "./Good";

const mockGoods = [
  {
    id: "1",
    title: "A very nice corgi",
    price: { current: "2999", previous: "3999" },
    image: "http://placecorgi.com/250",
    badge: { type: "info", text: "Акция" },
    stock: { type: "info", text: "В наличии" },
  },
  {
    id: "2",
    title: "An extra nice corgi",
    price: { current: "2999", previous: "3999" },
    image: "http://placecorgi.com/250",
    badge: { type: "primary", text: "Топ продаж" },
    stock: { type: "info", text: "В наличии" },
  },
  {
    id: "3",
    title: "A super nice corgi",
    price: { current: "2999", previous: "3999" },
    image: "http://placecorgi.com/250",
    badge: { type: "info", text: "Акция" },
    stock: { type: "info", text: "Заканчивается" },
  },
  {
    id: "4",
    title: "An amazingly nice corgi",
    price: { current: "2999" },
    image: "http://placecorgi.com/250",
    badge: { type: "info", text: "Акция" },
    stock: { type: "info", text: "В наличии" },
  },
];

class GoodsList extends React.Component {
  render() {
    return (
      <Container className="py-4">
        <h3>{this.props.category}</h3>
        <Row>
          {mockGoods.map((good) => (
            <Good key={good.id} good={good}></Good>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GoodsList;
