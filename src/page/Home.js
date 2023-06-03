import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";
import { cartContext } from "../context/CartContext";
import ProductItems from "../components/ProductItems";

import "./Home.css";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  const { addItem } = useContext(cartContext);

  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {Object.values(data)?.map((item) => (
        <ProductItems key={item._id} item={item} addItem={addItem} />
      ))}
    </div>
  );
};

export default Home;
