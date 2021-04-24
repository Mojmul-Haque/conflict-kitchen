import { createStore } from "redux";
import { cartReducer } from "../Reducer/Reduser";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(cartReducer, composeWithDevTools());
