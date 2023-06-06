import React, { useState } from "react";

const Address = () => {
  const [city, setCity] = useState({ value: "", isTouched: true });
  const [address, setAddress] = useState({ value: "", isTouched: true });
  const [postCode, setPostCode] = useState({ value: "", isTouched: true });
  const [phone, setPhone] = useState({ value: "", isTouched: true });
  const cityRegex = /^(.*[a-zA-Z]{2})[a-zA-Z]+.*$/;
  const addressRegex = /^(?=.*[a-zA-Z])[a-zA-Z\d\s]{10,}$/;
  const postCodeRegex = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{3}-?[0-9]{4}/;
  const phoneRegex = /09(0[1-9]|1[0-9]|3[0-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;

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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Postal Code</span>
              </label>
              <input
                type="text"
                placeholder="postal code"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-color border-none">next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
