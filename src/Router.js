import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Settings from "./page/Settings";
import Logout from "./page/LogOut";
import Profile from "./page/Profile";
import Cart from "./page/Cart";
import Product from "./page/Product";

const Router = ({ cartItems, setCartItems }) => {
  return (
    <Routes>
      <Route
        path="/"
        cartItems={cartItems}
        setCartItems={setCartItems}
        element={<Home />}
      />
      <Route path="/settings" element={<Settings />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/cart"
        cartItems={cartItems}
        setCartItems={setCartItems}
        element={<Cart />}
      />
      <Route path="/:_id" element={<Product />} />
    </Routes>
  );
};

export default Router;
