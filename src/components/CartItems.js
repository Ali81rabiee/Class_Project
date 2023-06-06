import React from "react";

const CartItems = ({ product, quantity, removeItem, addItem }) => {
  return (
    <div className="mt-5 grid grid-cols-4 justify-items-center content-center ml-auto px-1 py-5 rounded-2xl glass">
      <div className="h-40">
        <img src={product.image} className="h-5/6" />
      </div>
      <div className="my-auto">
        <h1 className="text-center ml-2">{product.name}</h1>
      </div>
      <div className="my-auto">
        <p className="font-bold mr-5">{`${product.price}$`}</p>
      </div>

      <div className="flex w-100 mr-5">
        <button
          className="btn border-none mr-2 bg-color my-auto"
          onClick={() => removeItem(product._id)}>
          -
        </button>

        <p className="my-auto mr-2">{quantity}</p>

        {product.countInStock > quantity ? (
          <button
            className="btn border-none bg-color my-auto"
            onClick={() => addItem(product)}>
            +
          </button>
        ) : (
          <button className="btn border-none bg-color my-auto" disabled>
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItems;
