import React from 'react'
import "./Footer.css"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Linkedin from "../../assets/linkedin.svg"

const Footer = () => {
  return (
    <div className='footer-cont'>
      <div className='footer-row-one'>
        <div><h2 className='refer'>Now Refer & Earn ₹500 for every referral*</h2></div>
        <div><p className='terms'>* Terms and conditions will be applied</p></div>
      </div>
      <div className='footer-row-two'>
        <div>
          <h3>ABOUT US</h3>
          <p>Doorstep Wash & Dryclean Service</p>
        </div>
        <div>
          <h3>Home</h3>
          <p>Sign In</p>
          <p>Register</p>
        </div>
        <h3>Pricing</h3>
        <div>
          <h3>Career</h3>
          <p>Blogs</p>
          <p>Create</p>
        </div>
        <h3>Contact</h3>
        <div>
          <div><h3>SOCIAL MEDIA</h3></div>
          <div className='footer-social-logos'>
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
      <div className='copyright'>2021 &#169; Laundry</div>
    </div>
  )
}

export default Footer