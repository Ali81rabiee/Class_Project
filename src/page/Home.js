import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";

const Home = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {data.map((item) => (
        <div className="card w-auto mt-28 mx-5 glass">
          <figure className="bg-white">
            <img src={item.image} alt="car!" />

            {/* {item.category === "Keyboard" ? (
              <img src={item.image} alt="car!" height={"300rem"} />
            ) : (
              <img src={item.image} alt="car!" width={"100rem"} />
            )} */}
          </figure>
          <div className="card-body">
            <h2 className="card-title block text-center">{item.name}</h2>
            {/* <span>{item.countInStock}</span> */}
            <span>{item.price} $</span>
            <span>rating: {item.rating}</span>
            <span>{item.category}</span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
