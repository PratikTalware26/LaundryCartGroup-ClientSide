import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Createorder from "./Components/createOrder/createorder/createorder";
import CreateOrderLanding from "./Components/createOrder/landingPage/landingPage";
import PastOrder from "./Components/pastOrder/pastOrderList/pastOrderPage";
import Register from "./Components/SignIn/Register";
import SignInPage from "./Components/SignIn/SignInPage"
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
