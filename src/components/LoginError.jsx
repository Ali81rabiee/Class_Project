import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../redux/action";

const LoginError = ({ error, user, setUser, pass, setPass, passRegex }) => {
  const dispatch = useDispatch();
  const navigat = useNavigate();

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
          <div className="card-body">
            <h2 className="text-2xl font-bold">
              WELCOM BACK TO
              <br />
              <span style={{ color: "#7ac142" }}>R A Z E R</span>
            </h2>
            <div className="badge-lg badge-error gap-2 h-auto">
              {error.response.data.message}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email or username"
                className="input input-bordered"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={(e) =>
                  setPass((l) => {
                    return { ...l, value: e.target.value };
                  })
                }
                onBlur={() =>
                  setPass((l) => {
                    return { ...l, isTached: true };
                  })
                }
                onFocus={() =>
                  setPass((l) => {
                    return { ...l, isTached: false };
                  })
                }
              />
              {pass.isTached && !passRegex.test(pass.value) && (
                <div className="badge badge-error mt-2 mx-auto gap-2">
                  password is not valid
                </div>
              )}
            </div>
            <div className="form-control mt-6">
              {pass.isTached && passRegex.test(pass.value) ? (
                <button
                  className="btn bg-color border-none"
                  onClick={() => dispatch(getLogin(user, pass.value))}>
                  login
                </button>
              ) : passRegex.test(pass.value) ? (
                <button
                  className="btn bg-color border-none"
                  onClick={() => dispatch(getLogin(user, pass.value))}>
                  login
                </button>
              ) : (
                <button className="btn bg-color border-none" disabled>
                  login
                </button>
              )}

              <button
                className="btn mt-5 bg-color border-none"
                onClick={() => navigat("/sing-up")}>
                go to sing up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginError;
