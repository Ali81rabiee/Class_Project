import axios from "axios";
import {
  loginFailed,
  loginLoading,
  loginSuccess,
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  proFailed,
  proLoading,
  proSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
  singUpFailed,
  singUpLoading,
  singUpSuccess,
} from "./constant";

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
  } catch (error) {
    dispatch({
      type: productsFailed,
      payload: { data: [], loading: false, error: error.message },
    });
    console.log(error);
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

// action for sing up

export const getsingUp =
  (username, email, password, mobile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: singUpLoading,
        payload: { data: [], loading: true, error: "" },
      });

      const { data } = await axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: `${username}`,
          email: `${email}`,
          password: `${password}`,
          mobile: `${mobile}`,
        },
      );
      dispatch({
        type: singUpSuccess,
        payload: { data: { ...data }, loading: false, error: "" },
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: singUpFailed,
        payload: {
          data: [],
          loading: false,
          error: error,
        },
      });
      console.log(error.response.data.message);
    }
  };

// action for login

export const getLogin = (user, pass) => async (dispatch, getState) => {
  try {
    dispatch({
      type: loginLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.post("http://kzico.runflare.run/user/login", {
      email: `${user}`,
      password: `${pass}`,
    });
    dispatch({
      type: loginSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log(data);
  } catch (error) {
    dispatch({
      type: loginFailed,
      payload: {
        data: [],
        loading: false,
        error: error,
      },
    });
    console.log(error.response.data.message);
  }
};

// action for profile

export const getprofile = (token) => async (dispatch, getState) => {
  try {
    dispatch({
      type: proLoading,
      payload: { data: [], loading: true, error: "" },
    });

    const { data } = await axios.get("http://kzico.runflare.run/user/profile", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: proSuccess,
      payload: { data: { ...data }, loading: false, error: "" },
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: proFailed,
      payload: {
        data: [],
        loading: false,
        error: error,
      },
    });
    // console.log(error.response.data.message);
  }
};
