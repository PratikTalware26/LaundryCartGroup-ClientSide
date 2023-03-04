import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Createorder from "./components/createOrder/createorder/createorder";
import CreateOrderLanding from "./components/createOrder/landingPage/landingPage";
import PastorderPage from "./components/pastOrder/pastOrderList/pastOrderPage";
// import PastOrder from "./components/pastOrder/pastOrderList/pastOrderPage";
import SignInPage from "./components/SignIn/SignInPage";
import RegisterPage from "./components/SignIn/RegisterPage";

export const tokenstorage = createContext();

function App() {
  const [token, settoken] = useState(null);
  return (
    <div className="App">
      <tokenstorage.Provider value={[token, settoken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<CreateOrderLanding />} />
            <Route path="/createorder" element={<Createorder />} />
            <Route path="/pastorders" element={<PastorderPage />} />
          </Routes>
        </BrowserRouter>
      </tokenstorage.Provider>
    </div>
  );
}

export default App;