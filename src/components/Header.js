import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 w-full px-10 border-b-2 border-black justify-between">
      <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
        <div className="flex-1">DigiTech</div>
      </Link>
      <div className="flex-none w-40">
        <div className="dropdown dropdown-end w-1/2">
          <label tabIndex={0} className="btn btn-ghost btn-circle mx-4">
            <Link to={"/cart"}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </Link>
          </label>
        </div>
        <div className="dropdown dropdown-end w-1/2">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar mx-3.5 items-center"
            style={{ width: "4rem", height: "4rem" }}>
            <div>
              <span className="mt-3 block">log In</span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link className="justify-between" to={"/profile"}>
              <li>Profile</li>
            </Link>
            <Link to={"/settings"}>
              <li>Settings</li>
            </Link>
            <Link to={"/logout"}>
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
