import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class SuccessModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Успешно!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ваш заказ передан менеджеру и будет обработан в скором времени!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SuccessModal;
