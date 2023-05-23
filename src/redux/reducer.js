import {
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
  singUpFailed,
  singUpLoading,
  singUpSuccess,
} from "./constant";

// create state for products

export const products = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case productsLoading:
      return payload;
    case productsFailed:
      return payload;
    case productsSuccess:
      return payload;

    default:
      return state;
  }
};

// create state for one product

export const oneProduct = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case oneProductLoading:
      return payload;
    case oneProductFailed:
      return payload;
    case oneProductSuccess:
      return payload;

    default:
      return state;
  }
};

// sing up

export const singUp = (
  state = { data: [], loading: false, error: "" },
  { type, payload },
) => {
  switch (type) {
    case singUpLoading:
      return payload;
    case singUpFailed:
      return payload;
    case singUpSuccess:
      return payload;

    default:
      return state;
  }
};
