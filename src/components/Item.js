import React, { useState } from "react";

import { addItem, removeItem, updateQuantity } from "../redux/actions/cart";
import { useDispatch, connect } from "react-redux";

function Item({ id, name, price }) {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const add = () => {
    setQuantity(quantity + 1);
    dispatch(addItem(id));
  };
  const remove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(removeItem(id));
    }
  };
  const changeQuantity = (event) => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setQuantity(value);
      dispatch(updateQuantity(id, value));
    }
  };
  return (
    <div className="item">
      <h4>{name}</h4>
      <p>Rs. {price}</p>
      <button onClick={remove}>-</button>
      <input type="text" value={quantity} onChange={changeQuantity} />
      <button onClick={add}>+</button>
    </div>
  );
}

export default connect()(Item);
