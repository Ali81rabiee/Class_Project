import axios from "axios";
import {
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
} from "./constant";
import { products } from "./reducer";

// req for products

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: productsLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios("http://kzico.runflare.run/product/");
    dispatch({
      type: productsSuccess,
      payload: { data: [...data], loading: false, error: "" },
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: productsFailed,
      payload: { data: [], loading: false, error: error.message },
    });
  }
};

// req for one product

export const getOneProduct = (_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: oneProductLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get(
      `http://kzico.runflare.run/product/${_id}`,
    );
    console.log(data);
    dispatch({
      type: oneProductSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
  } catch (error) {
    dispatch({
      type: oneProductFailed,
      payload: { data: [], loading: false, error: error.message },
    });
    console.log(error);
  }
};

// action for card items

export const addCart = (itemCart, item) => (dispatch, getState) => {
  dispatch({ type: "add Item To Card", payload: [...itemCart, item] });
  const localItems = JSON.parse(localStorage.getItem("cartData")) || [];
  localStorage.setItem("cartData", JSON.stringify([...localItems, item]));
};

export const addPI = (dispatch, productItem, step) => {
  dispatch({ type: "plus item", payload: productItem + step });
};
export const addmines = (dispatch, productItem, step) => {
  dispatch({ type: "plus item", payload: productItem + step });
};
