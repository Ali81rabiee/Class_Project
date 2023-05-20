import { useState } from "react";
import {
  addToCard,
  oneProductFailed,
  oneProductLoading,
  oneProductSuccess,
  productsFailed,
  productsLoading,
  productsSuccess,
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

// create state for card items

export const addCartItems = (state = [], { type, payload }) => {
  switch (type) {
    case addToCard:
      return state;

    default:
      break;
  }
  return state;
};

export const PI = (state = 0, { type, payload }) => {
  switch (type) {
    case "plus item":
      return payload;

    default:
      return state;
  }
};

