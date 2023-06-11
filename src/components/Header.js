import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { cartContext } from "../context/CartContext";
import { getprofile } from "../redux/action";

const Header = () => {
  const dispatch = useDispatch();
  const navigat = useNavigate();

  const { lengthOfItems } = useContext(cartContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const { data } = useSelector((state) => state.profile);
  useEffect(() => {
    if (user) {
      dispatch(getprofile(user.token));
    } else {
      return;
    }
  }, []);

  return (
    <div className="navbar bg-base-100 w-full px-10 border-b-2 border-black justify-between">
      <div className="flex-1">
        <img src={logo} className="-mt-6" onClick={() => navigat("/")} />
      </div>
      <div className="flex-none w-40">
        <div className="dropdown dropdown-end w-1/2">
          <label tabIndex={0} className="btn btn-ghost btn-circle mx-4">
            <div className="indicator" onClick={() => navigat("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-lg indicator-item bg-color border-none">
                {lengthOfItems}
              </span>
            </div>
          </label>
        </div>
        <div className="dropdown dropdown-end w-1/2">
          {user ? (
            <>
              <label
                key={user._id}
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mx-3.5 items-center"
                style={{ width: "4rem", height: "4rem" }}>
                <div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={user.image} />
                    </div>
                  </div>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={() => navigat("/profile")}>Profile</li>
                <li onClick={() => navigat("/orders")}>Orders</li>
                <li onClick={() => navigat("/logout")}>Logout</li>
              </ul>
            </>
          ) : (
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mx-3.5 items-center"
              style={{ width: "4rem", height: "4rem" }}>
              <div onClick={() => navigat("/login")}>
                <span className="mt-3 block text-lg">log In</span>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
