import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "./SuccessModal";

const Basket = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleCheckout = async (basket, name, tel) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "order",
        basket: basket.map((d) => d.title),
        name,
        tel,
      }),
    }).then(() => {
      setShowModal(false);
      setShowSuccessModal(true);
    });
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
