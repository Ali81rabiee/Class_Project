import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState({ value: "", isTouched: false });
  const [address, setAddress] = useState({ value: "", isTouched: false });
  const [postCode, setPostCode] = useState({ value: "", isTouched: false });
  const [phone, setPhone] = useState({ value: "", isTouched: false });
  const cityRegex = /^(.*[a-zA-Z]{2})[a-zA-Z]+.*$/;
  const addressRegex = /^(?=.*[a-zA-Z])[a-zA-Z\d\s]{10,}$/;
  const postCodeRegex = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{3}-?[0-9]{2}/;
  const phoneRegex = /09(0[1-9]|1[0-9]|3[0-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
  const userAddress = {
    city: city.value,
    address: address.value,
    postCode: postCode.value,
    phone: phone.value,
  };

  const handellUserAddress = () => {
    localStorage.setItem("user address", JSON.stringify(userAddress));
    navigate("/check-out");
    console.log("first");
  };

  return (
    <div className="hero min-h-screen pt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl glass">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
                onChange={(e) =>
                  setAddress((l) => {
                    return { ...l, value: e.target.value };
                  })
                }
                onBlur={() =>
                  setAddress((l) => {
                    return { ...l, isTouched: true };
                  })
                }
                onFocus={() =>
                  setAddress((l) => {
                    return { ...l, isTouched: false };
                  })
                }
              />
              {address.isTouched && !addressRegex.test(address.value) && (
                <div className="badge badge-error mt-2 mx-auto gap-2">
                  address is not valid
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Postal Code</span>
              </label>
              <input
                type="text"
                placeholder="postal code"
                className="input input-bordered"
                onChange={(e) =>
                  setPostCode((l) => {
                    return { ...l, value: e.target.value };
                  })
                }
                onBlur={() =>
                  setPostCode((l) => {
                    return { ...l, isTouched: true };
                  })
                }
                onFocus={() =>
                  setPostCode((l) => {
                    return { ...l, isTouched: false };
                  })
                }
              />
              {postCode.isTouched && !postCodeRegex.test(postCode.value) && (
                <div className="badge badge-error mt-2 mx-auto gap-2">
                  postCode is not valid
                </div>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="phone number"
                className="input input-bordered"
                onChange={(e) =>
                  setPhone((l) => {
                    return { ...l, value: e.target.value };
                  })
                }
                onBlur={() =>
                  setPhone((l) => {
                    return { ...l, isTouched: true };
                  })
                }
                onFocus={() =>
                  setPhone((l) => {
                    return { ...l, isTouched: false };
                  })
                }
              />
              {phone.isTouched && !phoneRegex.test(phone.value) && (
                <div className="badge badge-error mt-2 mx-auto gap-2">
                  phone is not valid
                </div>
              )}
            </div>
            <div className="form-control mt-6">
              {cityRegex.test(city.value) &&
              addressRegex.test(address.value) &&
              postCodeRegex.test(postCode.value) &&
              phoneRegex.test(phone.value) ? (
                <button
                  className="btn bg-color border-none"
                  onClick={handellUserAddress}>
                  next
                </button>
              ) : (
                <button className="btn bg-color border-none" disabled>
                  next
                </button>
              )}
              {/* <button className="btn bg-color border-none">next</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
