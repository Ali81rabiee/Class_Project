import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../redux/action";
import Loading from "../components/Loading";

const Profile = () => {
  const tokenUser = JSON.parse(localStorage.getItem("user"));
  const { data, loading, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprofile(tokenUser.token));
  }, []);

  const user = { ...data.user };
  return (
    <div className="min-h-screen">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="font-bold my-auto text-color text-center p-32">
          <p className="text-3xl text-red-700">{error.message}</p>
        </div>
      ) : (
        <div className="card w-80 glass shadow-xl my-40 mx-auto">
          <figure className="px-10 pt-10">
            <img src={user.image} alt="profile" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.username}</h2>
            <h2 className="card-title">{user.email}</h2>
            <h2 className="card-title">{user.mobile}</h2>
            <p>{user.firstname}</p>
            <p>{user.lastname}</p>
            <p>{user.gender}</p>
            <p>{user.age}</p>
            <p>{user.city}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
