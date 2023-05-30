import { configureStore } from "@reduxjs/toolkit";
import produtsReducer from "../features/produtsSlice";

const storeToolkit = configureStore({
  reducer: {
    products: produtsReducer,
  },
});

export default storeToolkit;
