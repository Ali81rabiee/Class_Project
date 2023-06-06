import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../redux/action";

const Cart = () => {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const { lengthOfItems, getTotalPrice, addItem, removeItem, items } =
    useContext(cartContext);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      dispatch(getprofile(user.token));
    } else {
      return;
    }
  }, []);
  return (
    <div className="container pb-10 px-3">
      {lengthOfItems > 0 ? (
        <>
          <div className="mt-28 grid grid-cols-4 justify-items-center content-center ml-auto px-1 py-5 rounded-2xl glass">
            <h1 className="my-auto">IMAGE</h1>
            <h1 className="my-auto">NAME</h1>
            <p className="my-auto">PRICE</p>
            <p className="my-auto">COUNT</p>
          </div>
          {items.map((item) => (
            <CartItems
              key={item.product._id}
              {...item}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
        </>
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

      <h2 className="font-bold my-auto text-color text-center mt-32">
        {`TOTAL : ${getTotalPrice()}$`}
      </h2>
      {lengthOfItems > 0 ? (
        user ? (
          <button
            className="btn bg-color fixed bottom-3 right-4 border-none w-1/5"
            onClick={() => navigat("/address")}>
            next
          </button>
        ) : (
          <button
            className="btn bg-color fixed bottom-3 right-4 border-none w-1/5"
            onClick={() => navigat("/login")}>
            next
          </button>
        )
      ) : (
        <button
          className="btn bg-color fixed bottom-3 right-4 border-none w-1/5"
          disabled>
          next
        </button>
      )}
    </div>
  );
};

export default Cart;
