import React from "react";
import { Button, Modal } from "react-bootstrap";
import BasketContext from "./BasketContext";
import BasketTable from "./BasketTable";

class ConfirmModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleClose}
        size="lg"
      >
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Продолжить покупки
          </Button>
          <BasketContext.Consumer>
            {({ basket }) => (
              <Button
                variant="primary"
                onClick={() => {
                  this.props.handleCheckout(basket);
                }}
              >
                Оформить заказ
              </Button>
            )}
          </BasketContext.Consumer>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfirmModal;
