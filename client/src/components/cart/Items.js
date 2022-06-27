import React, { useContext } from "react";
import { CartContext } from "./Cart";
import minus from './images/minus.png';
import plus from './images/add.png';

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="im" />
        </div>

        <div className="grocery-title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <img src={minus} alt="minus" onClick={()=>decrement(id)} />
          <input type="text" placeholder={quantity} disabled />
          <img src={plus} alt="plus" onClick={()=>increment(id)}/>
        </div>

        <div className="price">
          <h3>₹{price} per item</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;