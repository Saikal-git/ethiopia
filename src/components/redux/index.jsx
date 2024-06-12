import { combineReducers, createStore } from "redux";
import { ReducerCreate } from "./reducers/reducerCreate";
import { ReducerBasket } from "./reducers/reducerBasket";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    create: ReducerCreate,
    bas: ReducerBasket,
  }),
  composeWithDevTools()
);
