import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUploadAvatar } from "../redux/action";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const ChangeAvatar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uploadAvatar = useSelector((state) => state.uploadAvatar);
  const user = JSON.parse(localStorage.getItem("user"));
  const [pic, setPic] = useState(null);
  const formData = new FormData();
  formData.append("profile-image", pic);
  const handelluploadAvatar = () => {
    dispatch(getUploadAvatar(user.token, formData));
  };
  const showAlert = () => {
    Swal.fire("update profile", uploadAvatar.data.message, "success").then(
      () => {
        navigate("/profile");
      },
    );
  };
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {uploadAvatar.loading ? (
          <Loading />
        ) : uploadAvatar.data.message === "profile image uploaded" ? (
          showAlert()
        ) : uploadAvatar.error ? (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="badge-lg badge-error gap-2 h-5">
              {uploadAvatar.error.response.data.message}
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Profile</span>
                </label>
                <input
                  type="file"
                  placeholder="upload profile"
                  className="input input-bordered"
                  onChange={(e) => setPic(e.target.files[0])}
                />
              </div>

              <div className="form-control mt-6">
                {pic ? (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handelluploadAvatar();
                    }}>
                    Update profile
                  </button>
                ) : (
                  <button className="btn bg-color border-none" disabled>
                    Update profile
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
                  <span className="label-text">Upload Profile</span>
                </label>
                <input
                  type="file"
                  placeholder="upload profile"
                  className="input input-bordered"
                  onChange={(e) => setPic(e.target.files[0])}
                />
              </div>

              <div className="form-control mt-6">
                {pic ? (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handelluploadAvatar();
                    }}>
                    Update profile
                  </button>
                ) : (
                  <button className="btn bg-color border-none" disabled>
                    Update profile
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

export default ChangeAvatar;
