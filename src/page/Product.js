import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../redux/action";
import { useParams } from "react-router-dom";
import "./Product.css";
import Loading from "../components/Loading";

const Product = () => {
  const { _id } = useParams();
  const { data, loading, error } = useSelector((state) => state.oneProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(_id));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex justify-center items-center p-72">
          <p className="text-3xl text-red-700">{error.message}</p>
        </div>
      ) : data ? (
        <>
          <div className="hero min-h-screen block mt-24 p-8">
            <div className="hero-content flex-col lg:flex-row justify-around glass">
              <img src={data.image} className="rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl text-center font-bold">{data.name}</h1>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>color:</span>
                  <span>{data.color}</span>
                </div>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>category:</span>
                  <span>{data.category}</span>
                </div>
                <div className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>brand:</span>
                  <span>{data.brand}</span>
                </div>
                <div className="py-6 text-lg font-bold flex justify-between border-b-2 border-black">
                  <span>description: </span>
                  <span>{data.description}</span>
                </div>
                <div className="py-6 text-xl font-bold flex justify-between">
                  <span>price:</span>
                  <span>{data.price}$</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
