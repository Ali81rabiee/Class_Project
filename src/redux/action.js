import axios from "axios";
import {
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
} from "./constant";

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

export const getProductItem = (step) => (dispatch, getState) => {
  dispatch({
    type: "add product item to cart",
    payload: getState().productItem + step,
  });
};
