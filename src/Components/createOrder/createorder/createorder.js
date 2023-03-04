import React, { useEffect, useState } from "react";
import "./createorder.css";
import SelectProduct from "../selectProduct/selectProduct";
import Summary from "../summary/Summary";
import Sucessmodal from "../Ordersuccess/Sucessmodal";
import { Navigate, useNavigate } from "react-router-dom";
import { tokenstorage } from "../../../App";
import { useContext } from "react";
import AfterLoginHeader from "../afterLoginHeader/afterLoginHeader";
import searchicon from "../../../assets/search.svg";

export default function Createorder() {
  const [token, settoken] = useContext(tokenstorage);
  const customerOrder = {
    Shirts: {},
    Jeans: {},
    Joggers: {},
    Tshirts: {},
    Trousers: {},
    Boxers: {},
  };
  const navigate = useNavigate();
  const [render, setRender] = useState(0);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [sucess, setsucess] = useState(false);
  const [userData, setuserData] = useState({});

  const handleRender = () => {
    setRender(render + 1);
  };

  const handlesucess = () => {
    setsucess(true);
    setShow(false);
  };
  const handleProceed = () => {
    setShow(!show);
    fetch("http://localhost:8081/UserDetails", {
      headers: {
        authtoken: token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setuserData(data));
  };

  useEffect(() => {
    fetch("http://localhost:8081/")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);
  // const x=5;
  if (token) {
    return (
      <>
        <AfterLoginHeader />
        <div className="createorder__container">
          <div className="createorder__insidecontainer">
            <div className="createorder__upperbar">
              <h2>Create order</h2>
              <div className="searchbar__div">
                <img src={searchicon} alt="search"></img>{" "}
                <input className="searchbar" type={"text"}></input>
              </div>
            </div>
            <div className="Container">
              <header className="Container__header">
                <div className="Container__header1">Product Types</div>
                <div className="Container__header2">Quantity</div>
                <div className="Container__header3">Wash Type</div>
                <div className="Container__header4">Price</div>
              </header>
              {products.map((item) => {
                return (
                  <SelectProduct
                    render={render}
                    show={show}
                    setShow={setShow}
                    key={item.id}
                    {...item}
                    customerorder={customerOrder}
                  ></SelectProduct>
                );
              })}
            </div>
            <div className="createorder__buttons">
              <div className="createorder__buttons__div">
                <button onClick={handleRender} className="cancel-btn">
                  Cancel
                </button>
                <button onClick={handleProceed} className="proceed">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
        <Summary
          userDetails={userData}
          setShow={setShow}
          setsucess={setsucess}
          customerorder={customerOrder}
          isVisible={show}
          handleProceed={handleProceed}
          handlesucess={handlesucess}
        />
        <Sucessmodal isVisible={sucess} setsucess={setsucess} />
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
}
