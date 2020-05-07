import React from "react";
import { useDispatch, connect } from "react-redux";
import { checkout } from "../redux/actions/cart";

function Cart({ cart }) {
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart scrollable">
      <div className="title">Cart</div>
      {cart.length === 0 && (
        <p className="empty">Cart is empty. Please add items in the cart</p>
      )}
      {cart.map((item) => (
        <div key={item.id} class="items">
          <div class="item">
            <div>
              <h4>{item.name}</h4>
              <span>{` X  ${item.quantity}`}</span>
            </div>
            <span>&#8377;{(item.price * item.quantity).toFixed(2)}</span>
          </div>
          <div className="price">&#8377;{item.price.toFixed(2)}</div>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h4>Total: {total}</h4>

          <button
            onClick={() => {
              dispatch(checkout());
              alert("Thank you for your purchase");
            }}
            className="checkout"
          >
            Checkout{" "}
            <span role="img" aria-label="Checkout">
              ➡️
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps)(Cart);
