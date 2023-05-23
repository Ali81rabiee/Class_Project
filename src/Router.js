import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Settings from "./page/Settings";
import Logout from "./page/LogOut";
import Profile from "./page/Profile";
import Cart from "./page/Cart";
import Product from "./page/Product";
import Login from "./page/Login";
import SingUp from "./page/SingUp";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sing-up" element={<SingUp />} />
      <Route path="/:_id" element={<Product />} />
    </Routes>
  );
};

export default Router;
