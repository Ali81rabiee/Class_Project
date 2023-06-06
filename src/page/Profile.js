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
  console.log(data.user);
  console.log(error);
  const user = { ...data.user };
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="font-bold my-auto text-color text-center p-32">
          <div className="badge badge-error gap-2 p-6 mt-40">
            {error.response.data.message}
          </div>
        </div>
      ) : (
        <div className="card w-80 glass shadow-xl mt-40 mx-auto">
          <figure className="px-10 pt-10">
            <img src={user.image} alt="profile" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.username}</h2>
            <p>{user.email}</p>
            <p>{user.mobile}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
