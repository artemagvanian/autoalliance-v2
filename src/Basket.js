import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";

const goods = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Ваши товары</Popover.Title>
    <Popover.Content></Popover.Content>
  </Popover>
);

class Basket extends React.Component {
  render() {
    return (
      <OverlayTrigger trigger="click" placement="bottom" overlay={goods}>
        <Button variant="info" block>
          Корзина
        </Button>
      </OverlayTrigger>
    );
  }
}

export default Basket;
