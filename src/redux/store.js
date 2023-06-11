import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import {
  products,
  oneProduct,
  singUp,
  login,
  profile,
  submit,
  oneOrder,
  order,
  changeProfile,
  changePass,
  uploadAvatar,
} from "./reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products,
  oneProduct,
  singUp,
  login,
  profile,
  submit,
  oneOrder,
  order,
  changeProfile,
  changePass,
  uploadAvatar,
});
const middleWare = [thunk];
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare),
);

export default store;
