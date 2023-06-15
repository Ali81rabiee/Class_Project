import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSubmit } from "../redux/action";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const CheckOut = () => {
  const submit = useSelector((state) => state.submit);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAddress = JSON.parse(localStorage.getItem("user address" || "[]"));
  const userOrders = JSON.parse(localStorage.getItem("cart"));
  const TotalPrice = JSON.parse(localStorage.getItem("allTotalPrice"));
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(userAddress);
  const submitHandlle = () => {
    dispatch(
      getSubmit(
        user.token,
        userAddress.address,
        userAddress.city,
        userAddress.postCode,
        userAddress.phone,
        TotalPrice,
        userOrders,
      ),
    );
  };
  const showAlert = () => {
    Swal.fire("order", "order is complited", "success").then(() => {
      localStorage.removeItem("cart");
      localStorage.removeItem("user address");
      localStorage.removeItem("allTotalPrice");
      navigate(`/orders/${submit.data._id}`);
    });
  };

  return (
    <div className="hero min-h-screen">
      {submit.loading ? (
        <Loading />
      ) : submit.error ? (
        <p className="text-3xl text-red-700">{submit.error.message}</p>
      ) : submit.data.orderItems ? (
        showAlert()
      ) : userAddress && userOrders.length > 0 ? (
        <>
          <div className="hero-content flex-col glass mt-20 py-10">
            <div className="flex lg:flex-row flex-col justify-between w-full">
              <div className="lg:w-1/2">
                <h1 className="text-5xl text-center font-bold mt-5">
                  Your Address
                </h1>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>city:</span>
                  <span>{userAddress.city}</span>
                </div>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>addres:</span>
                  <span>{userAddress.address}</span>
                </div>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>post code</span>
                  <span>{userAddress.postCode}</span>
                </div>
                <div className="py-6 text-lg font-bold flex justify-between border-b-2 border-black">
                  <span>phone number: </span>
                  <span>{userAddress.phone}</span>
                </div>
              </div>
              <div className="px-8"></div>
              <div className="lg:w-1/2">
                <h1 className="text-5xl text-center font-bold mt-5">
                  Your orders
                </h1>
                {userOrders.map((item) => (
                  <div className="grid grid-cols-4 justify-items-center content-center ml-auto px-1 py-5 border-b-2 border-black">
                    <div className="h-40">
                      <img src={item.product.image} style={{ height: "85%" }} />
                    </div>
                    <div className="text-center my-auto w-full">
                      <h1 className="text-center">{item.product.name}</h1>
                    </div>
                    <div className="text-center my-auto w-full">
                      <p className="font-bold">{item.product.price}$</p>
                    </div>

                    <div className="text-center my-auto w-full">
                      <p className="font-bold">{item.quantity}</p>
                    </div>
                  </div>
                ))}
                <p className="text-center mt-5 font-bold">
                  TOTAL : {TotalPrice}$
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn bg-color fixed bottom-16 lg:left-10 xl:left-10 left-5  border-none w-1/5"
            onClick={() => navigate("/cart")}>
            edit
          </button>
          <button
            className="btn bg-color fixed bottom-3 lg:left-10 xl:left-10 left-5  border-none w-1/5"
            onClick={() => {
              submitHandlle();
            }}>
            submit
          </button>
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
            Your Cart Is Empty or Your Addrress is nothing
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
