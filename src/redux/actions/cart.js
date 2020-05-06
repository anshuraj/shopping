export const addItem = (productId, quantity) => {
  return (dispatch, getState) => {
    const state = getState();
    const { cart, products } = state;

    let item = cart.items.filter((item) => item.id === productId);

    if (item.length !== 0) {
      const updatedCart = cart.items.map((cartItem) => {
        return {
          id: cartItem.id,
          name: cartItem.name,
          price: cartItem.price,
          quantity:
            quantity ||
            (cartItem.id === productId
              ? cartItem.quantity + 1
              : cartItem.quantity),
        };
      });

      dispatch(updateCart(updatedCart));
    } else {
      let product = products.items.filter((prod) => prod.id === productId);
      let newItem = {
        id: productId,
        name: product[0].name,
        price: product[0].price,
        quantity: quantity || 1,
      };
      dispatch(updateCart([...cart.items, newItem]));
    }
  };
};

const updateCart = (updatedCart) => {
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return {
    type: "UPDATE_CART",
    payload: updatedCart,
  };
};

export const updateQuantity = (productId, quantity) => {
  return (dispatch) => {
    if (quantity === 0) {
      dispatch(removeItem(productId, quantity));
      return;
    } else {
      dispatch(addItem(productId, quantity));
    }
  };
};

export const removeItem = (productId, quantity) => {
  return (dispatch, getState) => {
    const state = getState();
    const { cart } = state;

    let item = cart.items.filter((item) => item.id === productId);

    if (quantity === 0 || item[0].quantity === 1) {
      let updatedItems = cart.items.filter((c) => c.id !== productId);
      dispatch(updateCart(updatedItems));
    } else {
      const updatedItems = cart.items.map((cartItems) => {
        return {
          id: cartItems.id,
          name: cartItems.name,
          price: cartItems.price,
          quantity:
            cartItems.id === productId
              ? cartItems.quantity - 1
              : cartItems.quantity,
        };
      });
      dispatch(updateCart(updatedItems));
    }
  };
};

export const checkout = () => {
  localStorage.setItem("cart", JSON.stringify([]));
  return {
    type: "CHECKOUT",
  };
};
