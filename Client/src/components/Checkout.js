import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h3>Hello, {user?.email}</h3>
        <div className="checkout_title">
          <h2>Your Shopping Busket</h2>
        </div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            price={item.price}
            image={item.image}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
