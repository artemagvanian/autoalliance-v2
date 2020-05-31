import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "./SuccessModal";

const Basket = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCheckout = async (basket, name, tel) => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div>
      <Button variant="info" block onClick={() => setShowModal(true)}>
        Корзина
      </Button>
      <ConfirmModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        handleCheckout={handleCheckout}
      />
      <SuccessModal
        showModal={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default Basket;
