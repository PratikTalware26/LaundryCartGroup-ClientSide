import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Register from './Register'

const RegisterPage = () => {
  return (
    <div className='register-cont'>
        <Navbar/>
        <Register/>
        <Footer/>
    </div>
  )
}

export default RegisterPage