import React, { createContext, useReducer, useEffect, useParams } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";
import Carousel from "react-bootstrap/Carousel";
import img from "../../assets/2.jpg"
import img3 from "../../assets/3.jpg"
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(props)
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);
  let obj={
    width:"400px",
    padding: "5px 100px ",
    height: "500px",
  }

  return (
    
    <>
    <div>
      <Carousel>
        <Carousel.Item>
        <img style = {obj} className="d-block w-100" src="https://cimages.milaap.org/milaap/image/upload/v1621937461/production/images/campaign/305274/Final_Image-Milaap_azlc44_1621937464.jpg" alt="Second slide" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={img} alt="Second slide" />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style = {obj} className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    <br/>
    <br/>
    

    </div>
    <div className="cart-body">
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}>
        <ContextCart {...props}/>
      </CartContext.Provider>
    </div>
    </>
    

  );
};

export default Cart;