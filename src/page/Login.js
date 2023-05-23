import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigat = useNavigate();

  return (
    <div className="text-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h2 className="text-2xl font-bold">
                WELCOM BACK TO
                <br />
                <span style={{ color: "#7ac142" }}>R E Z E R</span>
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-color border-none">Login</button>
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
    </div>
  );
};

export default Login;
