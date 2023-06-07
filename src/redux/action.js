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
  submitFailed,
  submitLoading,
  submitSuccess,
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
  } catch (error) {
    dispatch({
      type: loginFailed,
      payload: {
        data: [],
        loading: false,
        error: error,
      },
    });
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
  }
};

// action for Submit

export const getSubmit =
  (token, address, city, postalCode, phone, TotalPrice, userOrders) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: submitLoading,
        payload: { data: [], loading: true, error: "" },
      });

      const { data } = await axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: userOrders.map((item) => {
            return { product: item.product._id, qty: item.quantity };
          }),

          shippingAddress: {
            address: address,
            city: city,
            postalCode: postalCode,
            phone: phone,
          },
          paymentMethod: "cash",
          shippingPrice: "5",
          totalPrice: TotalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({
        type: submitSuccess,
        payload: { data: { ...data }, loading: false, error: "" },
      });
      localStorage.removeItem("user address");
      localStorage.removeItem("cart");
      localStorage.removeItem("allTotalPrice");
      console.log(data);
    } catch (error) {
      dispatch({
        type: submitFailed,
        payload: {
          data: [],
          loading: false,
          error: error,
        },
      });
      console.log(error);

      // const orderItems = [
      //   userOrders.map((item) => {
      //     return { product: item.product._id, qty: item.quantity };
      //   }),
      // ];
      // console.log(orderItems);
    }
  };
