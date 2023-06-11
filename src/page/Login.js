import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin, getprofile } from "../redux/action";
import Loading from "../components/Loading";
import LoginTrue from "../components/LoginTrue";
import LoginError from "../components/LoginError";
import LoginComponent from "../components/LoginComponent";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState({
    value: "",
    isTached: false,
  });
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const showAlert = () => {
    Swal.fire("login", login.data.message, "success").then(() => {
      navigate("/profile");
    });
  };
  // useEffect(() => {
  //   if (user) {
  //     dispatch(getprofile(data.user.token));
  //   } else {
  //     return;
  //   }
  // });
  console.log(login.data);
  return (
    <div className="text-center">
      {login.data.success ? (
        showAlert()
      ) : login.error ? (
        <LoginError
          error={login.error}
          user={user}
          setUser={setUser}
          pass={pass}
          setPass={setPass}
          passRegex={passRegex}
        />
      ) : login.loading ? (
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
