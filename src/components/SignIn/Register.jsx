import React from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    // console.log(data)
    const userRegisterFetch = async () => {
      try {
        await axios.post("http://localhost:8081/register", data);
      } catch (error) {
        console.log(error.message);
      }
    };
    userRegisterFetch();
  };

  return (
    <div className="reg-cont">
      <div className="reg-leftside">
        <h1 className="reg-logo">
          Laundry
          <br />
          Service
        </h1>
        <p className="reg-desc">
          Doorstep Wash &<br />
          Dryclean Service
        </p>
        <div className="reg-signinbtn-cont">
          <p className="account">Already Have Account</p>
          <div>
            <Link to="/">
            <button className="reg-signin-btn">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
      <div className="reg-rightside">
        <div>
          <h2 className="reg-rightside-head">REGISTER</h2>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit(formSubmit)}>
            <div className="reg-inp-cont">
              <div style={{ width: "50%" }}>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Name"
                    {...register("Name", { required: true })}
                  />
                  {errors.Name?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Phone"
                    {...register("Phone", {
                      minLength: 10,
                      maxLength: 10,
                      required: true,
                    })}
                  />
                  {errors.Phone?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                  {(errors.Phone?.type === "minLength" ||
                    errors.Phone?.type === "maxLength") && (
                    <small style={{ display: "block", color: "red" }}>
                      Please input valid 10 digit number
                    </small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="District"
                    {...register("District", { required: true })}
                  />
                  {errors.District?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Pincode"
                    {...register("Pincode", {
                      minLength: 6,
                      maxLength: 6,
                      required: true,
                    })}
                  />
                  {errors.Pincode?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                  {(errors.Pincode?.type === "minLength" ||
                    errors.Pincode?.type === "maxLength") && (
                    <small style={{ display: "block", color: "red" }}>
                      Pincode should be 6 digit number
                    </small>
                  )}
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    {...register("Email", {
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                  />
                  {errors.Email && (
                    <small style={{ display: "block", color: "red" }}>
                      Please Input valid email
                    </small>
                  )}
                </div>
                <div style={{ width: "400px" }}>
                  <select
                    style={{
                      width: "100%",
                      padding: "20px 0",
                      border: "none",
                      borderBottom: "2px #4552c1 solid",
                      marginBottom: "12px",
                      outline: "none",
                    }}
                    placeholder="state"
                    {...register("State", { required: true })}
                  >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                  </select>
                  {errors.State?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Address"
                    {...register("Address", { required: true })}
                  />
                  {errors.Address?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                </div>
                <div>
                    <input type="password" placeholder="Password" {...register("Password", {minLength:8, required:true})}/>
                    {errors.Password?.type === "required" && (
                    <small style={{ display: "block", color: "red" }}>
                      This field is required
                    </small>
                  )}
                  {errors.Password?.type === "minLength" && (
                    <small style={{ display: "block", color: "red" }}>
                      Password should contain minimum 8 characters
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "80px", textAlign: "center" }}>
              <div className="agree-check">
                <input type="checkbox" />
                <p className="agree">
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </p>
              </div>
              <div>
                <button className="reg-registerbtn" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
