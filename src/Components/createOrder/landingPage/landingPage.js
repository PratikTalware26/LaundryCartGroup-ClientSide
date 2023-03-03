import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tokenstorage } from "../../../App";
import AfterLoginHeader from "../afterLoginHeader/afterLoginHeader";
import "./landingPage.css";

const CreateOrderLanding=()=>{
    const [token] = useContext(tokenstorage)
    return(
        <>
        <AfterLoginHeader/>
        <div className="home-welcome">
            <div className="welcome-button">
                <Link to={"/createorder"}>
                    <button className="create-button">Create Order</button>
                </Link>
            </div>
        </div>
        </>
    );
}
export default CreateOrderLanding;