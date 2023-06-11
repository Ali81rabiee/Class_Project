import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./SingUp.css";
import Loading from "../components/Loading";
import { SingUpComponentError as Error } from "../components/SingUpComponentError";
import SingUpComponent from "../components/SingUpComponent";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.singUp);
  const [username, setUsernsam] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [confirm_password, setConfirm_password] = useState("");
  const [mobile, setMobile] = useState({ value: "", isTouched: false });
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  const mobileRegex =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4|0]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
  const showAlert = () => {
    Swal.fire("sing up", data.message, "success").then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="text-center mt-10 p-20">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error
          error={error}
          username={username}
          email={email}
          password={password}
          confirm_password={confirm_password}
          mobile={mobile}
          setMobile={setMobile}
          mobileRegex={mobileRegex}
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          setUsernsam={setUsernsam}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirm_password={setConfirm_password}
        />
      ) : data.success ? (
        showAlert()
      ) : (
        <SingUpComponent
          username={username}
          email={email}
          password={password}
          confirm_password={confirm_password}
          mobile={mobile}
          setMobile={setMobile}
          mobileRegex={mobileRegex}
          passwordRegex={passwordRegex}
          emailRegex={emailRegex}
          setUsernsam={setUsernsam}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirm_password={setConfirm_password}
        />
      )}
    </div>
  );
};

export default SingUp;
