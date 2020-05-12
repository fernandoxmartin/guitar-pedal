import cartReducer from "./cartReducer";
import totalReducer from "./totalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartReducer,
  totalReducer,
});

export default allReducers;
