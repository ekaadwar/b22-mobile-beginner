import { combineReducers } from "redux";
import cart from "./cart";
import items from "./items";

const rootReducer = combineReducers({
  cart,
  items,
});

export default rootReducer;
