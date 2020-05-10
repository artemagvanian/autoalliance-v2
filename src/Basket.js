import React from "react";
import { Button } from "react-bootstrap";
import { FirebaseContext } from "./Firebase";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "./SuccessModal";

class Basket extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { showModal: false, showSuccessModal: false };
  }
  handleSuccessClose = () => {
    this.setState({ showSuccessModal: false });
  };
  handleSuccessOpen = () => {
    this.setState({ showSuccessModal: true });
  };
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleOpen = () => {
    this.setState({ showModal: true });
  };
  handleCheckout = async (basket, name, tel) => {
    let firebase = this.context;
    await firebase.db
      .collection("orders")
      .doc()
      .set({
        basket: basket.map((i) => {
          return { title: i.title, price: i.price.current };
        }),
        name: name,
        tel: tel,
      });
    this.handleClose();
    this.handleSuccessOpen();
  };
  render() {
    return (
      <div>
        <Button variant="info" block onClick={this.handleOpen}>
          Корзина
        </Button>
        <ConfirmModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleCheckout={this.handleCheckout}
        />
        <SuccessModal
          showModal={this.state.showSuccessModal}
          handleClose={this.handleSuccessClose}
        />
      </div>
    );
  }
}

export default Basket;
