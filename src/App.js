import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Createorder from "./components/createOrder/createorder/createorder";
import CreateOrderLanding from "./components/createOrder/landingPage/landingPage";
import PastOrder from "./components/pastOrder/pastOrderList/pastOrderPage";
import Register from "./components/SignIn/Register";
import SignInPage from "./components/SignIn/SignInPage";

export const tokenstorage = createContext();

function App() {
  const [token, settoken] = useState(null);
  return (
    <div className="App">
      <tokenstorage.Provider value={[token, settoken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<CreateOrderLanding />} />
            <Route path="/createorder" element={<Createorder />} />
            <Route path="/pastorders" element={<PastOrder />} />
          </Routes>
        </BrowserRouter>
      </tokenstorage.Provider>
    </div>
  );
}

export default App;
