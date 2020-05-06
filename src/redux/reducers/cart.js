const localCart = localStorage.getItem("cart");

const INITIAL_STATE = {
  items: JSON.parse(localCart) || [],
};

const repos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return {
        ...state,
        items: [...action.payload],
      };
    case "CHECKOUT":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default repos;
