import { combineReducers } from "redux";
import cart from "./cart";
import items from "./items";
import { profileReducer } from "./profile";
import { globalReducer } from "./global";

const rootReducer = combineReducers({
  cart,
  items,
  profileReducer,
  globalReducer,
});

export default rootReducer;
