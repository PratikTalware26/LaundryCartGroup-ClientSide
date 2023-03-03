import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./pastOrderPage.css";
import searchIcon from "../../../assets/search.svg";
import eye from "../../../assets/eye-solid.svg";
import PastOrderSummary from "../pastOrderSummary/pastOrderSummary";
import CancelOrder from "../cancelOrder/cancelOrder";
import { tokenstorage } from "../../../App";

const PastOrder = () => {
  const navigate = useNavigate();
  const [token, settoken] = useContext(tokenstorage);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [customerOrder, setCustomerOrder] = useState({});
  const [counter, setCounter] = useState(0);

  const popupAlert = () => {
    setPopup(true);
    setShow(false);
  };

  const closeAlert = () => {
    setPopup(false);
  };

  const getData = async () => {
    await fetch("http://localhost:8081/getOrder", {
      method: "GET",
      headers:{
        authtoken: token
      },
    })
      .then((res) => res.json())
      .then((values) => setData(values));
  };
  // console.log(data.orderId);

  const deleteOrder = () => {
    setCounter(counter+1);
    fetch("http://localhost:8081/deleteOrder/" + orderId, {
      method: "DELETE",
      body: {
        orderId: orderId,
      },
    });
    setPopup(false);
    navigate("/pastorders");
  };

  useEffect(() => {
    getData();
  }, [counter]);

  const changeHandle=(id)=>{
    setOrderId(id);
    setShow(!show);
    fetch(`http://localhost:8081/order/${id}`,{
      method: "GET",
    }).then((res)=> res.json()).then((data)=> setCustomerOrder(data));
  }

  const x=5;
  if(x==5){
    return (
      <>
        <div className="container-pastorder-header">
          <div className="pastorder-header">
            <div className="pastOrdersNum">
              <h4 style={{ fontSize: "18px" }}>
                Orders <span>| 0</span>
              </h4>
            </div>
  
            <div className="pastorder-search">
              <div>
                <Link to={"createorder"}>
                  <button className="pastorder-create-button">Create</button>
                </Link>
              </div>
              <div className="pastorder-search-bar">
                <img src={searchIcon} alt="search-icon" />
                <input type="text" />
              </div>
            </div>
          </div>
  
          <div className="order-table-header">
            <div className="coloumn">
              <h6>Order id</h6>
            </div>
            <div className="coloumn">
              <h6>Order Date & Time</h6>
            </div>
            <div className="coloumn">
              <h6>Store Location</h6>
            </div>
            <div className="coloumn">
              <h6>City</h6>
            </div>
            <div className="coloumn">
              <h6>Store Phone</h6>
            </div>
            <div className="coloumn">
              <h6>Total Items</h6>
            </div>
            <div className="coloumn">
              <h6>Price</h6>
            </div>
            <div className="coloumn">
              <h6>status</h6>
            </div>
            <div className="coloumn">
              <h6>View</h6>
            </div>
          </div>
  
          <>
            {data.map((ele,index) => {
              const db_date= (ele.createdAt).split("-");
              const day = db_date[2];
              const date = `${day[0]}${day[1]}/${db_date[1]}/${db_date[0]}`
              return (
                <div className={
                  index%2 == 0 
                  ? "details-container1":"details-container2"
                }>
                  <>
                    <div className="coloumn">
                      <p>OR00{index+10}</p>
                    </div>
                    <div className="coloumn">
                      <p>{date}</p>
                    </div>
                    {/* <div className="coloumn">
                      <p>local</p>
                    </div> */}
                    <div className="coloumn">
                      <p>{ele.storeLocation}</p>
                    </div>
                    <div className="coloumn">
                      <p>{ele.phoneNo}</p>
                    </div>
                    <div className="coloumn">
                      <p>{ele.totalQuantity}</p>
                    </div>
                    <div className="coloumn">
                      <p>{ele.totalPrice}</p>
                    </div>
                    <div className="coloumn">
                      <p>ready to pickup</p>
                    </div>
                    <div className="coloumn">
                      <p>
                        <i onClick={() => changeHandle(ele._id)} style={{cursor: "pointer"}}>{eye}</i>
                      </p>
                    </div>
                  </>
                </div>
              );
            })}
          </>
          <PastOrderSummary
            customerOrder={customerOrder}
            popupAlert={popupAlert}
            isVisible={setShow}
            changeHandle={changeHandle}
           />
        </div>
  
        <CancelOrder
          deleteOrder={deleteOrder}
          closeAlert={closeAlert}
          popup={popup}
        />
      </>
    );
  }
  else{
    return <Navigate to="/" />
  }
 
};
export default PastOrder;
