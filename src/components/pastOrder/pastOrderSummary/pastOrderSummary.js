import React from "react";
// import React, { useEffect, useState } from "react";
import "./pastOrderSummary.css";

const  PastOrderSummary=({
  isVisible,
  changeHandler,
  alert_popup,
  customerorder,
})=> {


  if (isVisible) {
    return (
      <>
        <div className="summary__conatiner1">
          <div className="summary__leftdiv">
            <header className="summary__header">
              <div className="summary__header__innnerdiv">
                <h1>Summary</h1>
                <i onClick={changeHandler} class="fa-solid fa-xmark fa-2xl">X</i>
              </div>
            </header>
            <nav className="summary__storeselector">
              <div className="summary_StoreSelector__leftdiv">
                <h4>Store location</h4>
                {/* <p>{customerorder}</p> */}
                <p>Banglore</p>
              </div>
              <div>
                <h4>Store Address</h4>
                <p>Banglore</p>
              </div>
              <div className="summary_StoreSelector__rightdiv">
                <h4>phone No:</h4>
                <p>+91-9999999999</p>
              </div>
            </nav>
            <div className="multi_stepper">
              <div className="multi-stepper-tags"></div>
              <span className="track-span">pickedup</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">washed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">ironed</span>
              <div className="multi-stepper-tags"></div>
              <span className="track-span">delivered</span>
            </div>

            <div className="summary__orderdetails__container1">
              <div className="summary__heading">
                <h2>Order details</h2>
              </div>
              {console.log(customerorder)};
              {Object.keys(customerorder).map((item) => {
                if (customerorder[item] > 0) {
                  return (
                    <div className="summary__orderdetails">
                      <h1>{customerorder.prName}</h1>
                      {/* <h1>jeans,shirt</h1> */}
                      <p>{customerorder.washType}</p>
                      {/* <p>drying</p> */}

                      <div className="summary__pricediv">
                        <h3 className="summary__priceparticulars">
                          {customerorder.totalQuantity} x{" "}
                          {customerorder.totalPrice} ={" "}
                        </h3>
                        <h3 className="summary__mainPrice">
                          {customerorder.totalQuantity *
                            customerorder.totalPrice}
                        </h3>
                      </div>
                    </div>
                  );
                }
              })}
              <div className="summary__subtotal">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">Subtotal:</p>
                  <h3 className="summary__mainPrice">
                    {" "}
                    {customerorder.totalQuantity*customerorder.totalPrice*2}{" "}
                  </h3>
                </div>
              </div>
              <div className="summary__pickupcharges">
                <div className="summary__pricediv">
                  <p className="summary__priceparticulars">pickup charges:</p>
                  <h3 className="summary__mainPrice"> 90 </h3>
                </div>
              </div>
              <div className="summary__totalprice">
                <div className="summary__pricediv">
                  <h2 className="summary__priceparticulars__mainprice">
                    Total:
                  </h2>
                  <h2 className="summary__mainPrice__mainprice">
                    Rs: {customerorder.totalQuantity*customerorder.totalPrice*2 + 90}{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="summary__address__container">
              <h4>Address</h4>
              <div
                // onClick={selectAddress}
                className="summary__address summary__address--active"
              >
                <img alt="" src="images/tick.svg"></img>
                {/* <p>{customerorder.Address}</p> */}
                <p>{localStorage.getItem("address")}</p>
              </div>
            </div>

            <footer className="summary__footer1">
              <button onClick={alert_popup} className="cancel">
                Cancel Order
              </button>
            </footer>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default PastOrderSummary;