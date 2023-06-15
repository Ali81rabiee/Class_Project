import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import LoginError from "../components/LoginError";
import LoginComponent from "../components/LoginComponent";
import Swal from "sweetalert2";

const Login = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState({
    value: "",
    isTached: false,
  });
  const login = useSelector((state) => state.login);
  console.log(login.data);
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const showAlert = () => {
    Swal.fire("sing up", login.data.message, "success").then(() => {
      localStorage.setItem("user", JSON.stringify(login.data.user));
      navigate("/");
      console.log("first");
    });
  };
  return (
    <div className="text-center">
      {login.data.message === "logged in" ? (
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
