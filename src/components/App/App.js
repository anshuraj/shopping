import React from "react";
import { connect } from "react-redux";

import Navbar from "../Navbar";
import Item from "../Item";
import Cart from "../Cart";
import "./App.css";

function App({ cart, products }) {
  const quantity = cart.reduce((acc, val) => {
    acc[val.id] = val.quantity;
    return acc;
  }, {});

  return (
    <div className="App">
      <Navbar />
      <div className="layout">
        <div className="products scrollable">
          <div className="title">Items</div>
          {products.map((item) => (
            <Item key={item.id} {...item} qty={quantity[item.id] || 0} />
          ))}
        </div>

        <Cart />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.items,
  products: state.products.items,
});

export default connect(mapStateToProps)(App);
