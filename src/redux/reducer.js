import {
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
} from "./constant";

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
