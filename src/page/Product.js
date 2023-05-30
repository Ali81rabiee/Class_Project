import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../redux/action";
import { useParams } from "react-router-dom";
import "./Product.css";

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
        <div className="flex justify-center items-center p-72">
          <progress className="progress w-56"></progress>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center p-72">
          <div className="badge badge-lg text-2xl badge-error gap-2">
            {error}
          </div>
        </div>
      ) : data ? (
        <div className="mt-32">
          <div className="hero min-h-screen block">
            <div className="hero-content flex-col lg:flex-row justify-around">
              <img src={data.image} className="rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl text-center font-bold">{data.name}</h1>
                <p className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>color:</span>
                  <span>{data.color}</span>
                </p>
                <p className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>category:</span>
                  <span>{data.category}</span>
                </p>
                <p className="py-6 text-xl font-bold flex justify-between border-b-2 border-black">
                  <span>brand:</span>
                  <span>{data.brand}</span>
                </p>
                <p className="py-6 text-lg font-bold flex justify-between border-b-2 border-black">
                  <span>description: </span>
                  <span>{data.description}</span>
                </p>
                <p className="py-6 text-xl font-bold flex justify-between">
                  <span>price:</span>
                  <span>{data.price}$</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Product;
