import React, { createContext, useEffect, useState } from "react";
const cartContext = createContext();
const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(cartLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    const filterItems = items.filter(
      (item) => item.product._id === product._id,
    );
    if (filterItems.length !== 0) {
      setItems((l) =>
        l.map((item) => {
          if (
            item.product._id === product._id &&
            item.quantity < product.countInStock
          ) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        }),
      );
    } else {
      const item = {
        product,
        quantity: 1,
      };
      setItems((l) => [...l, item]);
    }
  };

  const removeItem = (_id) => {
    const itemFilter = items.filter((item) => item.product._id === _id)[0];
    if (itemFilter === undefined) return;
    if (itemFilter.quantity > 1) {
      setItems((l) =>
        l.map((item) => {
          if (item.product._id === _id) {
            item.quantity--;
            return item;
          } else {
            return item;
          }
        }),
      );
    } else {
      setItems((l) => l.filter((item) => item.product._id !== _id));
    }
  };

  const getTotalPrice = () => {
    const allPrice = items.map((item) => {
      const filterData = items.filter(
        (i) => i.product._id === item.product._id,
      )[0];
      return filterData.product.price * item.quantity;
    });
    const AllPrice = allPrice.reduce((pre, curr) => pre + curr, 0);
    localStorage.setItem("allTotalPrice", JSON.stringify(AllPrice));
    return AllPrice;
  };

  const value = {
    addItem,
    removeItem,
    items,
    getTotalPrice,
    lengthOfItems: items.length,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { cartContext, CartProvider };
