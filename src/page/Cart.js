import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPI } from "../redux/action";

const Cart = () => {
  const cartItem = useSelector((state) => state.addCartItems);
  const PI = useSelector((state) => state.PI);
  // const productIncrease = useSelector((state) => state.productIncrease);

  const [productIncrease, setProductIncrease] = useState(0);

  const dispatch = useDispatch();

  console.log(cartItem);

  return (
    <div className="container px-10 pb-10">
      <div className="mt-28 grid grid-cols-6 justify-items-center content-center ml-auto px-4 py-8 rounded-2xl bg-slate-300">
        <h1 className=" font-bold my-auto">IMAGE</h1>
        <h1 className=" font-bold my-auto">NAME</h1>
        <p className=" font-bold my-auto">PRICE</p>
        <p className=" font-bold my-auto">COUNT</p>
        <p className=" font-bold my-auto">TOTAL</p>
        <p className=" font-bold my-auto">REMOVE</p>
      </div>
      {cartItem.length > 0 ? (
        cartItem.map((item, index) => (
          <div
            key={item._id}
            className="mt-5 grid grid-cols-6 justify-items-center content-center ml-auto px-4 py-8 rounded-2xl bg-slate-300">
            <div className="h-40">
              <img src={item.image} className="h-5/6" />
            </div>
            <h1 className=" text-center font-bold my-auto">{item.name}</h1>
            <p className=" font-bold my-auto">{item.price}$</p>
            <div className="flex w-100">
              <button
                className="btn border-none mx-2 bg-color my-auto"
                onClick={() => {
                  if (productIncrease > 1) {
                    setProductIncrease((l) => l - 1);
                  }
                }}>
                -
              </button>
              <p className=" font-bold my-auto">{productIncrease}</p>
              <button
                className="btn border-none mx-2 bg-color my-auto"
                onClick={() => {
                  if (item.countInStock > productIncrease) {
                    setProductIncrease((l) => l + 1);
                  }
                }}>
                +
              </button>
            </div>
            <p className=" font-bold my-auto">$</p>
            <button
              className="btn btn-square btn-error mx-2 my-auto"
              onClick={() => addPI(dispatch, PI, 1)}
              onClickCapture={() => {
                cartItem.splice(index, 1);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
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
      <h2 className=" font-bold my-auto text-color text-center mt-3">
        TOTAL : 0$
      </h2>
    </div>
  );
};

export default Cart;
