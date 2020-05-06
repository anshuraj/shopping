import React from "react";

function Cart({ cart, checkout }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div>Cart</div>
      {cart.map((item) => (
        <div>
          <div>
            {`${item.name}  X  ${item.quantity}`} {item.price * item.quantity}
          </div>
          <div>{item.price}</div>
        </div>
      ))}

      {cart.length > 0 && <div>Total: {total}</div>}

      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
