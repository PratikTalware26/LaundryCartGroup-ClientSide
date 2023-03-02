import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-cont">
      <div className="signin-left-side">
        <h1 className="signin-logo">
          Laundry
          <br />
          Service
        </h1>
        <p className="desc-one">Doorstep Wash & Dryclean Service</p>
        <div>
          <p className="desc-two">Don't Have An Account ?</p>
          <button className="reg-btn">Register</button>
        </div>
      </div>
      <div style={{ width: "3px", background: "#ccc", height: "180px",margin: "auto"}}></div>
      <div className="signin-right-side">
        <h2 className="right-signin">SIGN IN</h2>
        <form action="">
          <div>
            <input type="text" placeholder="Mobile / Email" className="email-mobile-inp"/>
          </div>
          <div>
            <input type="text" placeholder="Password" className="password-inp"/>
          </div>
          <p className="forgot-pass">Forget Password ?</p>
          <div className="signin-btn-cont"><button className="signin-btn" type="submit">Sign In</button></div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
