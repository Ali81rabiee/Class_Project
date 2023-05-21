import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";

const Cart = () => {
  const { getItems, lengthOfItems, getTotalPrice, addItem, removeItem } =
    useContext(cartContext);
  return (
    <div className="container pb-10 px-3">
      <div className="mt-28 grid grid-cols-4 justify-items-center content-center ml-auto px-1 py-5 rounded-2xl bg-slate-300">
        <h1 className="my-auto">IMAGE</h1>
        <h1 className="my-auto">NAME</h1>
        <p className="my-auto">PRICE</p>
        <p className="my-auto">COUNT</p>
      </div>
      {lengthOfItems > 0 ? (
        getItems().map((item) => (
          <CartItems
            key={item._id}
            {...item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))
      ) : (
        <div className="font-bold my-auto text-color text-center p-32">
          <div className="badge badge-warning gap-2 p-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Your Cart Is Empty
          </div>
        </div>
      )}
      <h2 className="font-bold my-auto text-color text-center mt-3">
        {`TOTAL : ${getTotalPrice()}$`}
      </h2>
    </div>
  );
};

export default Cart;
