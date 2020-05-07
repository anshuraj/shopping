import React, { useState, useEffect } from "react";

import { addItem, removeItem, updateQuantity } from "../redux/actions/cart";
import { useDispatch, connect } from "react-redux";

function Item({ id, name, price, qty }) {
  const [quantity, setQuantity] = useState(qty || 0);

  useEffect(() => {
    setQuantity(qty);
  }, [qty]);

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
      <div>
        <h4>{name}</h4>
        <p>Rs. {price}</p>
      </div>
      <div className="controls">
        <button onClick={remove}>-</button>
        <input type="text" value={quantity} onChange={changeQuantity} />
        <button onClick={add}>+</button>
      </div>
    </div>
  );
}

export default connect()(Item);
