import React from "react";
import { useDispatch, connect } from "react-redux";
import { checkout } from "../redux/actions/cart";

function Cart({ cart }) {
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div>Cart</div>
      {cart.map((item) => (
        <div key={item.id}>
          <div>
            {`${item.name}  X  ${item.quantity}`} {item.price * item.quantity}
          </div>
          <div>{item.price}</div>
        </div>
      ))}

      {cart.length > 0 && <div>Total: {total}</div>}

      <button onClick={() => dispatch(checkout())} className="checkout">
        Checkout{" "}
        <span role="img" aria-label="Checkout">
          ➡️
        </span>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
