import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div><h2>LAUNDRY</h2></div>
        <div className='nav-list'>
            <button>Home</button>
            <button>Pricing</button>
            <button style={{borderLeft: "1px solid #f0ecec"}}>Career</button>
            <button style={{color:"white",background:"#5861AE 0% 0% no-repeat padding-box", boxShadow:"0px 3px 6px #00000029"}}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar