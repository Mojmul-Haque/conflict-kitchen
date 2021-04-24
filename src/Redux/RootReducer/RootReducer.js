import { combineReducers } from "redux";
import shopReduser from "../Reducer/Reduser.js";

export const rootReducer = combineReducers({
  shop: shopReduser,
});
