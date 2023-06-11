import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItems = ({ item, addItem }) => {
  const navigat = useNavigate();

  return (
    <div className="card w-auto mt-28 mx-5 glass border-none" key={item._id}>
      <figure
        className="bg-white border-none"
        onClick={() => navigat(`/product/${item._id.toString()}`)}>
        <img src={item.image} className="border-none" />
      </figure>
      <div className="card-body h-72 border-none">
        <h2
          className="card-title block text-center"
          onClick={() => navigat(`/product/${item._id.toString()}`)}>
          {item.name}
        </h2>
        <span
          onClick={() => navigat(`/product/${item._id.toString()}`)}
          className="badge badge-lg indicator-item rounded-full text-2xl font-bold w-12 h-12 absolute -top-5 -right-5 bg-color border-none">
          {item.countInStock}
        </span>
        <span onClick={() => navigat(`/product/${item._id.toString()}`)}>
          {item.price} $
        </span>
        <span onClick={() => navigat(`/product/${item._id.toString()}`)}>
          rating: {item.rating}
        </span>
        <div className="card-actions justify-end">
          {item.countInStock < 1 ? (
            <button
              className="btn absolute bottom-7 right-5 bg-color border-none"
              disabled>
              Add to Cart
            </button>
          ) : (
            <button
              className="btn absolute bottom-7 right-5 bg-color border-none"
              onClick={() => addItem(item)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
