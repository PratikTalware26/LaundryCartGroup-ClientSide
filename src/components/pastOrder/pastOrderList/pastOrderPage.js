import React from "react";
import "./pastOrderPage.css";
// import CancelAlert from "../CancelAlert/CancelAlert";
import { tokenstorage } from "../../../App";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AfterLoginHeader from "../../createOrder/afterLoginHeader/afterLoginHeader";
import Createorder from "../../createOrder/createorder/createorder";
import PastOrderSummary from "../pastOrderSummary/pastOrderSummary"
import CancelOrder from "../cancelOrder/cancelOrder"
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchicon from "../../../assets/search.svg"


const PastorderPage = () => {
  const [token, settoken] = useContext(tokenstorage);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [Visible, setVisible] = useState(false);
  const [popup, setPopup] = useState(false);
  const [orderId, setorderId] = useState("");
  const [counter, setCounter] = useState(0);
  const [customerorder, setcustomerorder] = useState({});

  const alert_popup = (id) => {
    setPopup(true);
    setVisible(false);
    // console.log(id);
  };
  const closeAlert = () => {
    setPopup(false);
  };

  const gettingData = async () => {
    await fetch("http://localhost:8081/getOrder", {
      headers: { authtoken: token },
    })
      .then((res) => res.json())
      .then((datas) => setData(datas));
  };

  const deleteOrder = async() => {
    setCounter(counter + 1);
    try {
      console.log(orderId);
      await fetch(`http://localhost:8081/deleteOrder/${orderId}`, {
        method: "DELETE",
        headers: {
          authtoken: token,
        },
        body: {
          orderId: orderId,
        },
      });
      
    } catch (error) {
      console.log(error.message);
    }
   
    setPopup(false);
    navigate("/pastorders");
  };

  useEffect(() => {
    gettingData();
  }, [counter]);

  const changeHandler = (id) => {
    setVisible(!Visible);
    setorderId(id);
    fetch(`http://localhost:8081/order/${id}`, {
      method: "GET",
      headers: {
        authtoken: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setcustomerorder(data));
  };
  if (token) {
    return (
      <>
        <AfterLoginHeader />
        {data.length === 0 ? (
          <Createorder />
        ) : (
          <div className="pastorder-full-container">
            <>
              <div className="table-order-main-header">
                <div className="table-main-header-data">
                  <h4 style={{ fontSize: "18px" }}>
                    Orders | <span>{data.length}</span>
                  </h4>
                </div>
                <div className="table-create-search">
                  <div>
                    <Link to={"/createorder"}>
                      <button className="create-button">Create</button>
                    </Link>
                  </div>
                  <div className="search-bar">
                    <i
                      style={{ color: "#a0a0a0" }}
                      // class="fa-solid fa-magnifying-glass"
                    ><img src={searchicon}/></i>
                    <input style={{border: "none"}} type="text" />{" "}
                  </div>
                </div>
              </div>
              <div className="orders-table-header">
                <div className="column">
                  <h6>Order id</h6>
                </div>
                <div className="column">
                  <h6>Order date & time</h6>
                </div>
                <div className="column">
                  <h6>Store Location</h6>
                </div>
                <div className="column">
                  <h6>City</h6>
                </div>
                <div className="column">
                  <h6>Store Phone</h6>
                </div>
                <div className="column">
                  <h6>Total items</h6>
                </div>
                <div className="column">
                  <h6>Price</h6>
                </div>
                <div className="column">
                  <h6>Status</h6>
                </div>
                <div className="column">
                  <h6>View</h6>
                </div>
              </div>
            </>
            <>
              {data.map((ele, index) => {
                let date = new Date(ele.createdAt);
                let dateStr = `${date
                  .toTimeString()
                  .split(" ")[0]
                  .substring(0, 5)}\n${date.toDateString().substring(4)}`;
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? "details-container1"
                        : "details-container2"
                    }
                  >
                    <>
                      <div className="column">
                        <p>OROOO{index + 1}</p>
                      </div>
                      <div className="column">
                        <p>{dateStr}</p>
                      </div>
                      <div className="column">
                        <p>Banglore</p>
                      </div>
                      <div className="column">
                        {/* <p>{ele.location}</p> */}
                        <p>{localStorage.getItem("city")}</p>
                      </div>
                      <div className="column">
                        <p>{localStorage.getItem("phone")}</p>
                      </div>
                      <div className="column">
                        <p>{ele.totalQuantity}</p>
                      </div>
                      <div className="column">
                        <p>{ele.totalPrice}</p>
                      </div>
                      <div className="column">
                        <p>ready to pickup</p>
                      </div>
                      <div className="column">
                        <p>
                          <i
                            onClick={() => changeHandler(ele._id)}
                            class="fa-solid fa-eye"
                            style={{ cursor: "pointer" }}
                          ><FontAwesomeIcon icon={faEye} /></i>
                        </p>
                      </div>
                    </>
                  </div>
                );
              })}
            </>
            <PastOrderSummary
              customerorder={customerorder}
              alert_popup={alert_popup}
              isVisible={Visible}
              setVisible={setVisible}
              changeHandler={changeHandler}
            />
          </div>
        )}{" "}
        <CancelOrder
          deleteOrder={deleteOrder}
          closeAlert={closeAlert}
          popup={popup}
        />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default PastorderPage;