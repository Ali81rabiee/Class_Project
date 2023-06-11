import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";
import { cartContext } from "../context/CartContext";
import ProductItems from "../components/ProductItems";
import "./Home.css";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { addItem } = useContext(cartContext);

  console.log(products.error);

  return (
    <>
      {products.loading ? (
        <Loading />
      ) : products.error ? (
        <p className="mt-40">error</p>
      ) : (
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {Object.values(products.data)?.map((item) => (
            <ProductItems key={item._id} item={item} addItem={addItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
