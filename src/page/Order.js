import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneOrder } from "../redux/action";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const Orders = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.oneOrder);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getOneOrder(user.token, _id));
  }, []);

  const TotalPrice = parseInt(data.totalPrice);
  const ShippingPrice = parseInt(data.shippingPrice);

  return (
    <div className="hero min-h-screen p-32">
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-3xl text-red-700">{error.response.data.message}</p>
      ) : (
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-auto max-w-sm shadow-2xl glass">
            <div className="cart-title border-b-2">
              <h2
                className="font-bold text-2xl mt-10 mb-10 px-4 text-left"
                style={{ color: "#7ac142" }}>
                Thanks for your Order
              </h2>
            </div>
            <div className="card-body">
              <div className="title-body flex justify-between items-center">
                <h3 className="text-xl text-left" style={{ color: "#7ac142" }}>
                  Receipt
                </h3>
                <div>
                  <h3 className="text-md text-center">Order Id : </h3>
                  <span className="text-right">{data._id}</span>
                </div>
              </div>
              {data.orderItems?.map((item) => (
                <div className="grid grid-cols-4 justify-items-center content-center bg-base-100 p-5 rounded-md border-2 border-gray-200">
                  <div className="my-auto">{item.product.name}</div>
                  <div className="my-auto">{item.product.color}</div>
                  <div className="my-auto">Qty:{item.qty}</div>
                  <div className="my-auto">
                    {item.product.price * item.qty}$
                  </div>
                </div>
              ))}
              <div className="body">
                <h3 className="font-bold text-lg text-left">Order Details</h3>
                <div className="flex justify-between items-center">
                  <div className="col mr-1">
                    <p className="text-gray-500 text-left mt-3">
                      Payment Method: {data.paymentMethod}
                    </p>
                  </div>
                  <div className="col ml-1">
                    <div>
                      <span className="font-bold text-gray-500 text-right mt-3 inline-block">
                        Total Price:
                      </span>
                      <span className="text-gray-500 text-right ml-3">
                        {data.totalPrice}$
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-500 text-right mt-2 inline-block">
                        Shipping Price:
                      </span>
                      <span className="text-gray-500 text-right ml-3">
                        {data.shippingPrice}$
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total-paid w-100 py-5 bg-color text-xl font-bold rounded-b-2xl text-center">
              TOTAL PAID: <span>{TotalPrice + ShippingPrice}$</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
