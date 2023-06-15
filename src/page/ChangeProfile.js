import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeProfile } from "../redux/action";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const ChangeProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeProfile = useSelector((state) => state.changeProfile);
  const [firstName, setFirstName] = useState({ value: "", isTouched: false });
  const [lastName, setLastName] = useState({ value: "", isTouched: false });
  const [gender, setGender] = useState({ value: "", isTouched: false });
  const [age, setAge] = useState({ value: 0, isTouched: false });
  const [city, setCity] = useState({ value: "", isTouched: false });
  const firstNameRegex = /^(.*[a-zA-Z]{2})[a-zA-Z]+.*$/;
  const lastNameRegex = /^(.*[a-zA-Z]{2})[a-zA-Z]+.*$/;
  const genderRegex = /^(?:m|M|male|Male|f|F|female|Female)$/;
  const cityRegex = /^(.*[a-zA-Z]{2})[a-zA-Z]+.*$/;
  const user = JSON.parse(localStorage.getItem("user"));
  const userAge = parseInt(age.value);
  const handellChangeProfile = () => {
    dispatch(
      getChangeProfile(
        user.token,
        firstName.value,
        lastName.value,
        gender.value,
        userAge,
        city.value,
      ),
    );
  };
  const showAlert = () => {
    Swal.fire("update profile", changeProfile.data.message, "success").then(
      () => {
        navigate("/profile");
      },
    );
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse mt-10 mb-20">
        {changeProfile.loading ? (
          <Loading />
        ) : changeProfile.error ? (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="badge-lg badge-error gap-2 h-5">
              {changeProfile.error.response.data.message}
            </div>{" "}
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">first name</span>
                </label>
                <input
                  type="text"
                  placeholder="firsr name"
                  className="input input-bordered"
                  onChange={(e) =>
                    setFirstName((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setFirstName((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setFirstName((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {firstName.isTouched &&
                  !firstNameRegex.test(firstName.value) && (
                    <div className="badge badge-error mt-2 mx-auto gap-2">
                      first Name is not valid
                    </div>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">last name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input input-bordered"
                  onChange={(e) =>
                    setLastName((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setLastName((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setLastName((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {lastName.isTouched && !lastNameRegex.test(lastName.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    last Name is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">gender</span>
                </label>
                <input
                  type="text"
                  placeholder="gender"
                  className="input input-bordered"
                  onChange={(e) =>
                    setGender((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setGender((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setGender((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {gender.isTouched && !genderRegex.test(gender.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    gender is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  className="input input-bordered"
                  onChange={(e) =>
                    setAge((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setAge((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setAge((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">city</span>
                </label>
                <input
                  type="text"
                  placeholder="city"
                  className="input input-bordered"
                  onChange={(e) =>
                    setCity((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setCity((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setCity((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {city.isTouched && !cityRegex.test(city.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    city is not valid
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                {firstNameRegex.test(firstName.value) &&
                lastNameRegex.test(lastName.value) &&
                genderRegex.test(gender.value) &&
                cityRegex.test(city.value) ? (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handellChangeProfile();
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
        ) : changeProfile.data.message === "user profile was updated" ? (
          showAlert()
        ) : (
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">first name</span>
                </label>
                <input
                  type="text"
                  placeholder="firsr name"
                  className="input input-bordered"
                  onChange={(e) =>
                    setFirstName((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setFirstName((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setFirstName((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {firstName.isTouched &&
                  !firstNameRegex.test(firstName.value) && (
                    <div className="badge badge-error mt-2 mx-auto gap-2">
                      first Name is not valid
                    </div>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">last name</span>
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input input-bordered"
                  onChange={(e) =>
                    setLastName((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setLastName((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setLastName((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {lastName.isTouched && !lastNameRegex.test(lastName.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    last Name is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">gender</span>
                </label>
                <input
                  type="text"
                  placeholder="gender"
                  className="input input-bordered"
                  onChange={(e) =>
                    setGender((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setGender((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setGender((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {gender.isTouched && !genderRegex.test(gender.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    gender is not valid
                  </div>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  className="input input-bordered"
                  onChange={(e) =>
                    setAge((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setAge((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setAge((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">city</span>
                </label>
                <input
                  type="text"
                  placeholder="city"
                  className="input input-bordered"
                  onChange={(e) =>
                    setCity((l) => {
                      return { ...l, value: e.target.value };
                    })
                  }
                  onBlur={() =>
                    setCity((l) => {
                      return { ...l, isTouched: true };
                    })
                  }
                  onFocus={() =>
                    setCity((l) => {
                      return { ...l, isTouched: false };
                    })
                  }
                />
                {city.isTouched && !cityRegex.test(city.value) && (
                  <div className="badge badge-error mt-2 mx-auto gap-2">
                    city is not valid
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                {firstNameRegex.test(firstName.value) &&
                lastNameRegex.test(lastName.value) &&
                genderRegex.test(gender.value) &&
                cityRegex.test(city.value) ? (
                  <button
                    className="btn bg-color border-none"
                    onClick={() => {
                      handellChangeProfile();
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

export default ChangeProfile;
