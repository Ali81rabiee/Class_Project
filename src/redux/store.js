import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {} from "./reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({});
const middleWare = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare),
);

export default store;
