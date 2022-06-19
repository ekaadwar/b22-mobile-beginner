import { combineReducers } from "redux";
import cart from "./cart";
import items from "./items";
import profile from "./profile";

const rootReducer = combineReducers({
  cart,
  items,
  profile,
});

export default rootReducer;
