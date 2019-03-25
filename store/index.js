import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducers
import coffeeReducer from "./reducers/coffeeReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  rootCoffee: coffeeReducer,
  rootCart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
