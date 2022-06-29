import { combineReducers } from "redux";
import cart from "./cart";
import items from "./items";
import profile from "./profile";
import { globalReducer } from "./global";

const rootReducer = combineReducers({
  cart,
  items,
  profile,
  globalReducer,
});

export default rootReducer;
