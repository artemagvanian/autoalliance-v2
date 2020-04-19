import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import BasketContext from "./BasketContext";
import BasketTable from "./BasketTable";
import { FirebaseContext } from "./Firebase";
import ConfirmModal from "./ConfirmModal";

class Basket extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleOpen = () => {
    this.setState({ showModal: true });
  };
  handleCheckout = async (basket) => {
    let firebase = this.context;
    await firebase.db
      .collection("orders")
      .doc()
      .set({
        basket: basket.map((i) => {
          return { title: i.title, price: i.price.current };
        }),
      });
    this.handleClose();
  };
  render() {
    const goods = (
      <Popover id="popover-basic" style={{ maxWidth: 320 }}>
        <Popover.Title as="h3" className="text-center">
          Ваши товары
        </Popover.Title>
        <BasketContext.Consumer>
          {({ basket }) => (
            <Popover.Content>
              {basket.length == 0 ? (
                <p>Тут ничего нет...</p>
              ) : (
                <div>
                  <BasketTable basket={basket} />
                  <Button variant="info" block onClick={this.handleOpen}>
                    Подтвердить покупку
                  </Button>
                </div>
              )}
            </Popover.Content>
          )}
        </BasketContext.Consumer>
      </Popover>
    );
    return (
      <div>
        <OverlayTrigger trigger="focus" placement="bottom" overlay={goods}>
          <Button variant="info" block>
            Корзина
          </Button>
        </OverlayTrigger>
        <ConfirmModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleCheckout={this.handleCheckout}
        />
      </div>
    );
  }
}

export default Basket;
