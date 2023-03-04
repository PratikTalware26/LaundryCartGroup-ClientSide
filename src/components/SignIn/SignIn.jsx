import React, { useContext } from "react";
import "./SignIn.css";
import Lock from "../../assets/padlock.svg"
import {useForm} from "react-hook-form"
import axios from "axios"
import {Link, Navigate} from "react-router-dom"
import { tokenstorage } from "../../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignIn = () => {
  const [token, settoken] = useContext(tokenstorage);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit= async (data)=>{
    // console.log(data)
    const fetchSigninUser=async ()=>{
      try {
        await axios.post("http://localhost:8081/login", data).then((res)=>{
        console.log(res);
        settoken(res.data.token);
        localStorage.setItem("Name", res.data.userData.Name);
        localStorage.setItem("city", res.data.userData.District);
        localStorage.setItem("phone", res.data.userData.Phone);
        localStorage.setItem("address", res.data.userData.Address)
      }).catch((e)=>{
        console.log(e.message)
        toast.error("Please input valid credentials or register !");
      })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchSigninUser();
  }
  return (
    <>
    {token?(
      <Navigate to="/home"></Navigate>
    ):(
    <div className="signin-cont">
            <ToastContainer />
      <div className="signin-left-side">
        <h1 className="signin-logo">
          Laundry
          <br />
          Service
        </h1>
        <p className="desc-one">Doorstep Wash & Dryclean Service</p>
        <div>
          <p className="desc-two">Don't Have An Account ?</p>
          <Link to="/register">
          <button className="reg-btn">Register</button>
          </Link>
        </div>
      </div>
      <div style={{ width: "3px", background: "#ccc", height: "180px",margin: "auto"}}></div>
      <div className="signin-right-side">
        <h2 className="right-signin">SIGN IN</h2>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div>
            <input type="text" placeholder="Mobile / Email" className="email-mobile-inp" {...register("Email", {minLength:10, required:true})}/>
            {errors.Email && (
                    <small style={{display:"block", color: "red" }}>Please Provide valid Email or Mobile Number</small>
                )}
          </div>
          <div className="pass-cont">
            <input type="password" placeholder="Password" className="password-inp" {...register("Password", {required:true})}/>
            {errors.Password && (
                    <small style={{display:"block", color: "red" }}>This field is required</small>
                )}
            <img className="pass-lock" src={Lock} alt="pass-lock-logo" />
          </div>
          <p className="forgot-pass">Forget Password ?</p>
          <div className="signin-btn-cont"><button className="signin-btn" type="submit">Sign In</button></div>
        </form>
      </div>
    </div>
    )};
    </>
  );
};

export default SignIn;