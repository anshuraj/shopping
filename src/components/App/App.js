import React from "react";
import "./App.css";

import { useDispatch, connect } from "react-redux";
import { checkout } from "../../redux/actions/cart";

import Item from "../Item";
import Cart from "../Cart";

function App({ cart, products }) {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Cart</li>
        </ul>
      </nav>
      <div className="layout">
        <div className="items">
          <div>Items</div>
          {products.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>

        <Cart checkout={() => dispatch(checkout())} cart={cart} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  products: state.products.items,
});

export default connect(mapStateToProps)(App);
