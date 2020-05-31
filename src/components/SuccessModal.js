import React from "react";
import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ showModal, handleClose }) => (
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Успешно!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Ваш заказ передан менеджеру и будет обработан в скором времени!
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Закрыть
      </Button>
    </Modal.Footer>
  </Modal>
);

export default SuccessModal;
