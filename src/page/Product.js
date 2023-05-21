import React, { useEffect } from "react";
import logo from "../image/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addPI, getOneProduct } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const navigat = useNavigate();
  const { _id } = useParams();
  const { data, loading, error } = useSelector((state) => state.oneProduct);

  const PI = useSelector((state) => state.PI);

  const itemCart = useSelector((state) => state.addCartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(_id));
  }, []);

  return (
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
            <button
              className="btn w-full color border-none"
              onClick={() => addPI(dispatch, PI, 1)}
              onClickCapture={() => addCart(dispatch, itemCart, data)}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
