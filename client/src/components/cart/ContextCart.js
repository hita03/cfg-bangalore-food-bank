import React, { useContext, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import cartimg from './images/cart.png';
// import arrow from './images/arrow.png';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import {useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import key from "./keys.txt";

const ContextCart = () => {
  let navigate = useNavigate();
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
  useEffect(() => {
    axios.get("http://localhost:5000/addcart")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))


  }, [])

  function addCart() {
    console.log("inside add cart", totalAmount)
    let data = {
      donations: totalAmount,

    }
    axios.post("http://localhost:5000/addcart", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    navigate("/payment");

  }

  const [grocery,setGrocery]=useState({
    name: "Dal",
    price: 70,
    qty: 2,
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, grocery }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      console.log("success");
    } else {
     console.log("fail");
    }
  }


  return (
    <>
      <header>
        <div className="continue-shopping">
          {/* <img src={arrow} alt="arrow" className="arrow-icon" /> */}
          {/* <h3>Grocery List</h3> */}
        </div>

        <div className="cart-icon">
          <img src={cartimg} alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Grocery Items</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem} </span> grocery items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Total Donations: <span>₹{totalAmount}</span>
          </h3>
          {/* <button onClick={() => {
            addCart()
          }}>Checkout</button> */}
          <StripeCheckout
        stripeKey={key}
        token={handleToken}
        amount={totalAmount*100}
        name="Donation"
        billingAddress
        shippingAddress
      />
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;