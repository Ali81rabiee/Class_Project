import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";
const cartContext = createContext();
const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(cartLocalStorage);
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (_id) => {
    const filterProduct = data.filter((item) => item._id == _id)[0];
    if (filterProduct === undefined) return;
    const filterItems = items.filter((item) => item._id == _id);
    if (filterItems.length !== 0) {
      setItems((l) =>
        l.map((item) => {
          if (item._id === _id) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        }),
      );
    } else {
      const item = {
        _id,
        quantity: 1,
      };
      setItems((l) => [...l, item]);
    }
  };

  const removeItem = (_id) => {
    const itemFilter = items.filter((item) => item._id === _id)[0];
    if (itemFilter === undefined) return;
    if (itemFilter.quantity > 1) {
      setItems((l) =>
        l.map((item) => {
          if (item._id === _id) {
            item.quantity--;
            return item;
          } else {
            return item;
          }
        }),
      );
    } else {
      setItems((l) => l.filter((item) => item._id !== _id));
    }
  };

  const getItems = () => {
    return items.map((item) => {
      const filterData = data.filter((i) => i._id === item._id)[0];
      filterData.quantity = item.quantity;
      return filterData;
    });
  };

  const getTotalPrice = () => {
    const allPrice = items.map((item) => {
      const filterData = data.filter((i) => i._id === item._id)[0];
      return filterData.price * item.quantity;
    });
    return allPrice.reduce((pre, curr) => pre + curr, 0);
  };

  const value = {
    addItem,
    removeItem,

    getItems,
    getTotalPrice,
    lengthOfItems: items.length,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
