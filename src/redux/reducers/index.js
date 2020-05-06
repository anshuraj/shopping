import cart from "./cart";
import products from "./products";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ cart, products });

export default rootReducer;
