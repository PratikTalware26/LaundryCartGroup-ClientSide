import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./CancelAlert.css";
import x_mark from "../../../assets/xmark-solid.svg"
import danger from "../../../assets/triangle-exclamation-solid.svg"

const CancelOrder=({ popup, closeAlert, deleteOrder })=> {
  if (popup) {
    return (
      <>
    
        <div className="whole">
          <div className="CancelAlert-div">
            <div className="Alert-head">
              Alert <i style={{cursor:"pointer"}} onClick={closeAlert} class="fa-solid fa-xmark fa-xl"><img src=""></img>X</i>
            </div>
            {/* <i class="fa-thin fa-xmark"></i> */}
            <div className="remaining-part">
              <div className="traingle">
                <i
                  className="i"
                  class="fa-solid fa-triangle-exclamation fa-2xl"
                ><img src={danger} /></i>
              </div>
              <div className="alert-proceed">
                <div className="Alert-msg">
                  Are you sure want to cancel Order No:{"OR0001"}
                </div>
                <div className="proceed">
                  <button onClick={deleteOrder} className="proceed-button">
                    proceed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default CancelOrder;