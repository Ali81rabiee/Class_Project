import { useState } from "react";
import "./App.css";
import Router from "./Router";
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Header />
      <Router cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
