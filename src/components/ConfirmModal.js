import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import BasketContext from "./BasketContext";
import BasketTable from "./BasketTable";

const ConfirmModal = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  return (
    <Modal show={props.showModal} onHide={props.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Завершить покупку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ваш заказ будет передан менеджеру, он свяжется с вами для
          подтверждения покупки
        </p>
        <p>Товары в корзине</p>
        <BasketContext.Consumer>
          {({ basket }) => <BasketTable basket={basket} />}
        </BasketContext.Consumer>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите ваше имя"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Ваш телефон</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Введите ваш телефон"
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Продолжить покупки
        </Button>
        <BasketContext.Consumer>
          {({ basket }) => (
            <Button
              variant="primary"
              disabled={basket.length > 0 ? false : true}
              onClick={() => {
                props.handleCheckout(basket, name, tel);
                basket = [];
              }}
            >
              Оформить заказ
            </Button>
          )}
        </BasketContext.Consumer>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
