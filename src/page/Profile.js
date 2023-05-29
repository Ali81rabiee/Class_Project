import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../redux/action";

const Profile = () => {
  const token = localStorage.getItem("userToken");
  const { data, loading, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprofile());
  }, []);
  console.log(data.user);
  console.log(error);
  const user = { ...data.user };
  return (
    <div className="card w-80 bg-base-100 shadow-xl mt-40 mx-auto">
      <figure className="px-10 pt-10">
        <img src={user.image} alt="profile" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
    </div>
  );
};

export default Profile;
