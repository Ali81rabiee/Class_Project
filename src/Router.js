import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Cart from "./page/Cart";
import Product from "./page/Product";
import Login from "./page/Login";
import SingUp from "./page/SingUp";
import Address from "./page/Address";
import NotFound from "./components/NotFound";
import CheckOut from "./page/CheckOut";
import Order from "./page/Order";
import Orders from "./page/Orders";
import ChangeProfile from "./page/ChangeProfile";
import ChangePass from "./page/ChangePass";
import Setting from "./page/Setting";
import ChangeAvatar from "./page/ChangeAvatar";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setting" element={<Setting />}>
        <Route path="change-profile" element={<ChangeProfile />} />
        <Route path="change-password" element={<ChangePass />} />
        <Route path="change-avatar" element={<ChangeAvatar />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sing-up" element={<SingUp />} />
      <Route path="/product/:_id" exact element={<Product />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/address" element={<Address />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:_id" element={<Order />} />
    </Routes>
  );
};

export default Router;
