import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsingUp } from "../redux/action";
import "./SingUp.css";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigat = useNavigate();
  const dispatch = useDispatch();
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
  return (
    <div className="text-center mt-10">
      {error ? (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h2 className="text-2xl font-bold">
                  WELCOM TO
                  <span style={{ color: "#7ac142" }}>R E Z E R</span>
                </h2>
                <div className="badge badge-error gap-2 mt-2 mx-auto">
                  {error.response.data.message[0]}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    name="username"
                    onChange={(e) => setUsernsam(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    onChange={(e) =>
                      setEmail((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {email.isTouched && !emailRegex.test(email.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      email not valid
                    </div>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    onChange={(e) =>
                      setPassword((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {password.isTouched &&
                    !passwordRegex.test(password.value) && (
                      <div className="badge badge-error gap-2 mt-2 mx-auto">
                        password not valid
                      </div>
                    )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    name="confirm_password"
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                  {password.value !== confirm_password ? (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      The passwords are not the same
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input input-bordered"
                    name="mobile"
                    onChange={(e) =>
                      setMobile((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {mobile.isTouched && !mobileRegex.test(mobile.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      phone number not valid
                    </div>
                  )}
                </div>
                <div className="form-control mt-6">
                  {passwordRegex.test(password.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !mobileRegex.test(mobile.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !emailRegex.test(email.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : password.value !== confirm_password ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : (
                    <button
                      className="btn bg-color border-none"
                      onClick={() =>
                        dispatch(
                          getsingUp(
                            username,
                            email.value,
                            password.value,
                            mobile.value,
                          ),
                        )
                      }>
                      Sing Up
                    </button>
                  )}
                  <button
                    className="btn bg-color border-none mt-2"
                    onClick={() => navigat("/login")}>
                    log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : data ? (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h2 className="text-2xl font-bold">
                  WELCOM TO
                  <span style={{ color: "#7ac142" }}>R E Z E R</span>
                </h2>
                <div className="badge-lg badge-success gap-2">
                  {data.message} plesa go to login
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    name="username"
                    onChange={(e) => setUsernsam(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    onChange={(e) =>
                      setEmail((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {email.isTouched && !emailRegex.test(email.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      email not valid
                    </div>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    onChange={(e) =>
                      setPassword((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {password.isTouched &&
                    !passwordRegex.test(password.value) && (
                      <div className="badge badge-error gap-2 mt-2 mx-auto">
                        password not valid
                      </div>
                    )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    name="confirm_password"
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                  {password.value !== confirm_password ? (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      The passwords are not the same
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input input-bordered"
                    name="mobile"
                    onChange={(e) =>
                      setMobile((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {mobile.isTouched && !mobileRegex.test(mobile.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      phone number not valid
                    </div>
                  )}
                </div>
                <div className="form-control mt-6">
                  {passwordRegex.test(password.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !mobileRegex.test(mobile.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !emailRegex.test(email.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : password.value !== confirm_password ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : (
                    <button
                      className="btn bg-color border-none"
                      onClick={() =>
                        dispatch(
                          getsingUp(
                            username,
                            email.value,
                            password.value,
                            mobile.value,
                          ),
                        )
                      }>
                      Sing Up
                    </button>
                  )}
                  <button
                    className="btn bg-color border-none mt-2"
                    onClick={() => navigat("/login")}>
                    log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h2 className="text-2xl font-bold">
                  WELCOM TO <span style={{ color: "#7ac142" }}>R E Z E R</span>
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    name="username"
                    onChange={(e) => setUsernsam(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    onChange={(e) =>
                      setEmail((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setEmail((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {email.isTouched && !emailRegex.test(email.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      email not valid
                    </div>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    onChange={(e) =>
                      setPassword((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setPassword((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {password.isTouched &&
                    !passwordRegex.test(password.value) && (
                      <div className="badge badge-error gap-2 mt-2 mx-auto">
                        password not valid
                      </div>
                    )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    name="confirm_password"
                    onChange={(e) => setConfirm_password(e.target.value)}
                  />
                  {password.value !== confirm_password ? (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      The passwords are not the same
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input input-bordered"
                    name="mobile"
                    onChange={(e) =>
                      setMobile((l) => {
                        return { ...l, value: e.target.value };
                      })
                    }
                    onBlur={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: true };
                      })
                    }
                    onFocus={() =>
                      setMobile((l) => {
                        return { ...l, isTouched: false };
                      })
                    }
                  />
                  {mobile.isTouched && !mobileRegex.test(mobile.value) && (
                    <div className="badge badge-error gap-2 mt-2 mx-auto">
                      phone number not valid
                    </div>
                  )}
                </div>
                <div className="form-control mt-6">
                  {passwordRegex.test(password.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !mobileRegex.test(mobile.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : !emailRegex.test(email.value) ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : password.value !== confirm_password ? (
                    <button className="btn bg-color border-none" disabled>
                      Sing Up
                    </button>
                  ) : (
                    <button
                      className="btn bg-color border-none"
                      onClick={() =>
                        dispatch(
                          getsingUp(
                            username,
                            email.value,
                            password.value,
                            mobile.value,
                          ),
                        )
                      }>
                      Sing Up
                    </button>
                  )}
                  <button
                    className="btn bg-color border-none mt-2"
                    onClick={() => navigat("/login")}>
                    log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingUp;
