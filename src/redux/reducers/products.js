import items from "../../items.json";

const INITIAL_STATE = {
  items: items,
};

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
