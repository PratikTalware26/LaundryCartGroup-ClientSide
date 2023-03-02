import React, { useEffect, useState } from "react";
import washing from '../../../assets/washing-machine.svg';
import ironing from '../../../assets/ironing.svg';
import ironingOnSelect from '../../../assets/ironing-onselect.svg';
import towel from '../../../assets/towel.svg';
import bleach from '../../../assets/bleach.svg';
import bleachOnSelect from '../../../assets/bleach-onselect.svg';

const SelectProduct = ({name,description,customerOrder,render}) => {

    const [quantity, setQuantity] = useState(0);
    const [wash, setWash] = useState(false);
    const [iron, setIron] = useState(false);
    const [dry, setDry] = useState(false);
    const [bleach, setBleach] = useState(false);

    const handleClick=async(e)=>{
        if(e.target.name === "quantity"){
            setQuantity(e.target.value);
        }
    };

    const selectWashType=(e)=>{
        if(e.target.name === "wash"){
            setWash(!wash);
        }
        else if(e.target.name === "iron"){
            setIron(!iron);
        }
        else if(e.target.name === "dry"){
            setDry(!dry);
        }
        else if(e.target.name === "bleach"){
            setBleach(!bleach);
        }
    };

    var washType = "";
    if(wash){
        washType += "Wash";
    }
    if(iron){
        washType += "iron"
    };
    if(dry){
        washType += "dry"
    };
    if(bleach){
        washType += "bleach"
    };

    var totalPrice = 0;
    if(wash){
        totalPrice += 10;
    }
    if(iron){
        totalPrice += 10;
    }
    if(dry){
        totalPrice += 20;
    }
    if(bleach){
        totalPrice += 50;
    }

    customerOrder[name] = {
        name: name,
        quantity: quantity,
        washType: washType,
        totalPrice: totalPrice
    };

    useEffect(()=>{
        setQuantity(0);
        setWash(false);
        setBleach(false);
        setDry(false);
        setIron(false);
    },[render]);

    const handleReset=()=>{
        setQuantity(0);
        setWash(false);
        setBleach(false);
        setDry(false);
        setIron(false);
    }
  return (
    <>
      <div className="product-container">
        <div className="section-product-type">
          <div className="product-type">
            <img
              src="https://thumbs.dreamstime.com/z/stack-clothes-fresh-laundry-textile-isolated-white-background-washing-fabric-clean-pile-cotton-sweater-shirt-color-fashion-160704383.jpg"
              alt="product"
            />
            <div className="product-details">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="product-quantity">
          <input type="number" value={quantity} onChange={handleClick} />
        </div>

        <div className="product-widget">
          <img
            alt="wash"
            className="widget"
            name="wash"
            onClick={selectWashType}
            src={
              wash
                ? washing
                : washing
            }
          />
          <img
            alt="iron"
            className="widget"
            name="iron"
            onClick={selectWashType}
            src={
              wash
                ? ironing
                : ironingOnSelect
            }
          />
          <img
            alt="dry"
            className="widget"
            name="dry"
            onClick={selectWashType}
            src={
              wash
                ? dry
                : dry
            }
          />
          <img
            alt="bleach"
            className="widget"
            name="bleach"
            onClick={selectWashType}
            src={
              wash
                ? bleach
                : bleachOnSelect
            }
          />
        </div>

        <div className="product-price">
            {quantity === 0 ? (
                "---"
            ):(
                <>
                    <p className="product-price-div">
                        {quantity} X {totalPrice} {" "}
                    </p>{" "}

                    <p className="product-mainPrice-div">
                        {quantity * totalPrice}
                    </p>
                </>
            )}
            <button onClick={handleReset} className="reset">
                Reset
            </button>
        </div>
      </div>
    </>
  );
};

export default SelectProduct;


