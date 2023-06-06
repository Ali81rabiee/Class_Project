import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Settings from "./page/Settings";
import Logout from "./page/LogOut";
import Profile from "./page/Profile";
import Cart from "./page/Cart";
import Product from "./page/Product";
import Login from "./page/Login";
import SingUp from "./page/SingUp";
import Address from "./page/Address";
import NotFound from "./components/NotFound";
import Loading from "./components/Loading";

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
      <Route path="/product/:_id" exact element={<Product />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/address" element={<Address />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
};

export default Router;
