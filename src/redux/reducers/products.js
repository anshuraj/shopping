import items from "../../items.json";

const INITIAL_STATE = {
  items: items,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_QUANTITY":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default products;
