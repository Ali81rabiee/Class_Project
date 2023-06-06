import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin, getprofile } from "../redux/action";
import Loading from "../components/Loading";
import LoginTrue from "../components/LoginTrue";
import LoginError from "../components/LoginError";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
  const navigat = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState({
    value: "",
    isTached: false,
  });
  const { data, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  // useEffect(() => {
  //   if (user) {
  //     dispatch(getprofile(data.user.token));
  //   } else {
  //     return;
  //   }
  // });

  return (
    <div className="text-center">
      {data ? (
        <LoginTrue
          data={data}
          user={user}
          setUser={setUser}
          pass={pass}
          setPass={setPass}
          passRegex={passRegex}
        />
      ) : error ? (
        <LoginError
          error={error}
          user={user}
          setUser={setUser}
          pass={pass}
          setPass={setPass}
          passRegex={passRegex}
        />
      ) : loading ? (
        <Loading />
      ) : (
        <LoginComponent
          user={user}
          setUser={setUser}
          pass={pass}
          setPass={setPass}
          passRegex={passRegex}
        />
      )}
    </div>
  );
};

export default Login;
