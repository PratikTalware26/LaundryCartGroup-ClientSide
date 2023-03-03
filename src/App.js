import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Createorder from "./components/createOrder/createorder/createorder";
// import CreateOrderLanding from "./components/createOrder/landingPage/landingPage";
// import PastOrder from "./Components/pastOrder/pastOrderList/pastOrderPage";
import RegisterPage from "./Components/SignIn/RegisterPage";
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
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/home" element={<CreateOrderLanding />} /> */}
            {/* <Route path="/createorder" element={<Createorder />} /> */}
            {/* <Route path="/pastorders" element={<PastOrder />} /> */}
          </Routes>
        </BrowserRouter>
      </tokenstorage.Provider>
    </div>
  );
}

export default App;
