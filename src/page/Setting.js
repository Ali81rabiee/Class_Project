import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Setting = () => {
  return (
    <div className="min-h-screen">
      <div className="navbar mt-24 flex justify-center">
        <div className="navbar-center glass flex justify-around">
          <div className="p-5">
            <NavLink
              to="change-profile"
              className={({ isActive, isPending }) =>
                isPending ? "text-state-950" : isActive ? "color" : ""
              }>
              Change Profile
            </NavLink>
          </div>
          <div className="p-5">
            <NavLink
              to="change-password"
              className={({ isActive, isPending }) =>
                isPending ? "text-state-950" : isActive ? "color" : ""
              }>
              Change Password
            </NavLink>
          </div>

          <div className="p-5">
            <NavLink
              to="change-avatar"
              className={({ isActive, isPending }) =>
                isPending ? "text-state-950" : isActive ? "color" : ""
              }>
              Change Avatar
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Setting;
