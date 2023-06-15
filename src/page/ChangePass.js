import React, { useState } from "react";
import { getChangePass } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const ChangePass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changePass = useSelector((state) => state.changePass);

  const user = JSON.parse(localStorage.getItem("user"));
  const [oldPass, setOldPass] = useState({ value: "", isTached: false });
  const [newPass, setNewPass] = useState({ value: "", isTached: false });
  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handellChangePass = () => {
    dispatch(getChangePass(user.token, oldPass.value, newPass.value));
  };
  const showAlert = () => {
    Swal.fire("update profile", changePass.data.message, "success").then(() => {
      navigate("/profile");
    });
  };
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {changePass.Loading ? (
          <Loading />
        ) : changePass.data.message === "password has been changed" ? (
          showAlert()
        ) : changePass.error ? (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="card-body">
              <div className="badge-lg badge-error gap-2 h-5">
                {changePass.error.response.data.message}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input
                  type="password"
                  placeholder="old password"
                  className="input input-bordered"
                  onChange={(e) =>
                    setOldPass((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setOldPass((l) => {
                      return { ...l, isTached: true };
                    })
                  }
                  onFocus={() =>
                    setOldPass((l) => {
                      return { ...l, isTached: false };
                    })
                  }
                />
                {oldPass.isTached && !passRegex.test(oldPass.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    password is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="new password"
                  className="input input-bordered"
                  onChange={(e) =>
                    setNewPass((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setNewPass((l) => {
                      return { ...l, isTached: true };
                    })
                  }
                  onFocus={() =>
                    setNewPass((l) => {
                      return { ...l, isTached: false };
                    })
                  }
                />
                {newPass.isTached && !passRegex.test(newPass.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    password is not valid
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                {!passRegex.test(oldPass.value) ? (
                  <button className="btn bg-color border-none" disabled>
                    Update password
                  </button>
                ) : !passRegex.test(newPass.value) ? (
                  <button className="btn bg-color border-none" disabled>
                    Update password
                  </button>
                ) : (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handellChangePass();
                    }}>
                    Update password
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Old Password</span>
                </label>
                <input
                  type="password"
                  placeholder="old password"
                  className="input input-bordered"
                  onChange={(e) =>
                    setOldPass((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setOldPass((l) => {
                      return { ...l, isTached: true };
                    })
                  }
                  onFocus={() =>
                    setOldPass((l) => {
                      return { ...l, isTached: false };
                    })
                  }
                />
                {oldPass.isTached && !passRegex.test(oldPass.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    password is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="new password"
                  className="input input-bordered"
                  onChange={(e) =>
                    setNewPass((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setNewPass((l) => {
                      return { ...l, isTached: true };
                    })
                  }
                  onFocus={() =>
                    setNewPass((l) => {
                      return { ...l, isTached: false };
                    })
                  }
                />
                {newPass.isTached && !passRegex.test(newPass.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    password is not valid
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                {!passRegex.test(oldPass.value) ? (
                  <button className="btn bg-color border-none" disabled>
                    Update password
                  </button>
                ) : !passRegex.test(newPass.value) ? (
                  <button className="btn bg-color border-none" disabled>
                    Update password
                  </button>
                ) : (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handellChangePass();
                    }}>
                    Update password
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePass;
