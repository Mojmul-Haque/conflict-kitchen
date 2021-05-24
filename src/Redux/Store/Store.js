import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../RootReducer/RootReducer";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, composeWithDevTools());

// export const persiStore = persistStore(store);
