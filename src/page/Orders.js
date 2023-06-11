import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Orders = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrder(user.token));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="grid grid-col-1 justify-items-center content-center mt-20 gap-8">
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="mt-40">error</p>
      ) : (
        Object.values(data)?.map((item, index) => (
          <div
            className="card basis-96 shadow-xl p-0 glass max-w-sm mt-20 mb-5"
            key={item._id}>
            <div className="card-body items-center text-center py-5 px-0">
              <h2 className="card-title text-2xl">#{item._id}</h2>
              <div className="order-item border-b-2 px-5 pt-3 pb-5 w-full">
                <h2 className="text-xl mb-3">Order Items</h2>
                {item.orderItems?.map((i) => (
                  <div className="grid grid-cols-2 justify-items-center content-centar w-80 bg-slate-200 rounded-md mt-3">
                    <p className="text-lg text-center my-auto col-span-2 border-b-2 border-slate-950">
                      {i.product.name}
                    </p>
                    <p className="text-lg text-center my-auto">{i.qty}</p>
                    <p className="text-lg text-center my-auto">
                      {+i.product.price * i.qty}$
                    </p>
                  </div>
                ))}
              </div>
              <div className="user-adddress border-b-2 w-full px-5">
                <h2 className="text-xl mb-3 text-center">Order Address</h2>
                <div className="grid grid-cols-2 jutify-items-center content-center w-80">
                  <div className="my-3">
                    <span className="font-bold text-gray-600"> city: </span>
                    <span> {item.shippingAddress?.city} </span>
                  </div>
                  <div className="my-3">
                    <span className="font-bold text-gray-600"> address: </span>
                    <span> {item.shippingAddress?.address} </span>
                  </div>
                  <div className="my-3">
                    <span className="font-bold text-gray-600"> phone: </span>
                    <span> {item.shippingAddress?.phone} </span>
                  </div>
                  <div className="my-3">
                    <span className="font-bold text-gray-600">
                      postal code:
                    </span>
                    <span> {item.shippingAddress?.postalCode} </span>
                  </div>
                </div>
              </div>
              <div className="payment-type w-full px-5">
                <h2 className="text-xl mb-3">Payment Type</h2>
                <div className="my-5">
                  <span className="font-bold text-md text-gray-500">
                    Payment Method:
                  </span>
                  <span> {item.paymentMethod}</span>
                </div>
                <div className="my-5">
                  <span className="font-bold text-md text-gray-500">
                    Total Price:
                  </span>
                  <span> {item.totalPrice}$</span>
                </div>
                <div className="my-5">
                  <span className="font-bold text-md text-gray-500">
                    Shipping Price:
                  </span>
                  <span> {parseInt(item.shippingPrice)}</span>
                </div>
                <div className="my-5">
                  <span className="font-bold text-md text-gray-500">
                    Total Cost:
                  </span>
                  <span>{parseInt(item.shippingPrice) + item.totalPrice}$</span>
                </div>
              </div>
              <div className="card-actions">
                <button
                  className="btn bg-color border-none"
                  onClick={() => navigate(`/orders/${item._id}`)}>
                  see order
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
