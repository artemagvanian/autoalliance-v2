import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class InfoModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Узнать больше</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Для того, чтобы узнать дополнительную информацию, позвоните по
            одному из номеров, предоставленных ниже
          </p>
          <p className="display-4">+380 98 857 07 07</p>
          <p className="display-4">+380 66 857 07 07</p>
          <p className="display-4">+380 63 857 07 07</p>
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

export default InfoModal;
