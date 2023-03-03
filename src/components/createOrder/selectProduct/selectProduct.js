import React, { useEffect, useState } from "react";
import "./selectProduct.css";
import washingmachine_onselect from "../../../Assets/washing-machine.svg";
import washingmachine from "../../../Assets/washing-machine.svg";
import iron_select from "../../../Assets/ironing-onselect.svg";
import ironing from "../../../Assets/ironing.svg";
import towel_select from "../../../Assets/towel.svg";
import towel_icon from "../../../Assets/towel.svg";
import bleach_icon_select from "../../../Assets/bleach-onselect.svg"
import bleach_icon from "../../../Assets/bleach.svg";


export default function SelectProduct({
	name,
	description,
	image,
	customerorder,
	render,
}) {
	const [quantity, setQuantity] = useState(0);
	const [wash, setWash] = useState(false);
	const [iron, setIron] = useState(false);
	const [dry, setDry] = useState(false);
	const [bleach, setBleach] = useState(false);

	const handleClick = async (e) => {
		if (e.target.name === "quantity") {
			setQuantity(e.target.value);
		}
	};
	const selectWashType = (e) => {
		if (e.target.name === "wash") {
			setWash(!wash);
		} else if (e.target.name === "iron") {
			setIron(!iron);
		} else if (e.target.name === "dry") {
			setDry(!dry);
		} else if (e.target.name === "bleach") {
			setBleach(!bleach);
		}
	};

	var washtype = "";
	if (wash) {
		washtype += "Wash,";
	}
	if (iron) {
		washtype += "iron,";
	}
	if (dry) {
		washtype += "dry,";
	}
	if (bleach) {
		washtype += "bleach,";
	}

	var totalPrice = 0;
	if (wash) {
		totalPrice += 10;
	}
	if (iron) {
		totalPrice += 10;
	}
	if (dry) {
		totalPrice += 10;
	}
	if (bleach) {
		totalPrice += 50;
	}

	customerorder[name] = {
		name: name,
		quantity: quantity,
		washtype: washtype,
		totalPrice: totalPrice,
	};
	useEffect(() => {
		setQuantity(0);
		setWash(false);
		setBleach(false);
		setDry(false);
		setIron(false);
	}, [render]);

	const handleReset = () => {
		setQuantity(0);
		setWash(false);
		setBleach(false);
		setDry(false);
		setIron(false);
	};

	return (
		<>
			<div className="singleproduct__container">
				<div className="singleproduct__container__product">
					<div className="singleproduct__product">
						<img
							alt="product"
							className="product"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwrJPgC5sXEWlAYTjfHHi9kx99U8_kUdSufnt8fNn&s"
						></img>
						<div className="single__productdetails">
							<h3>{name}</h3>
							<p>{description}</p>
						</div>
					</div>
				</div>
				<div className="singleproduct__quantity">
					<input
						value={quantity}
						name="quantity"
						onChange={handleClick}
						type={"number"}
					></input>
				</div>
				<div className="singleproduct__widgets">
					<img
						alt="wash"
						className="widgets"
						name="wash"
						onClick={selectWashType}
						src={
							wash
								? washingmachine_onselect
								: washingmachine
						}
					></img>
					<img
						alt="iron"
						className="widgets"
						name="iron"
						onClick={selectWashType}
						src={iron ? iron_select : ironing}
					></img>
					<img
						alt="dry"
						className="widgets"
						name="dry"
						onClick={selectWashType}
						src={dry ? towel_select : towel_icon}
					></img>

					<img
						alt="bleach"
						name="bleach"
						onClick={selectWashType}
						className="widgets"
						src={bleach ? bleach_icon_select : bleach_icon}
					></img>
				</div>
				<div className="singleproduct__price">
					{quantity === 0 ? (
						"------"
					) : (
						<>
							<p className="singleproduct__Price__div">
								{quantity} x {totalPrice} ={" "}
							</p>{" "}
							<p className="singleproduct__mainPrice__div">
								{quantity * totalPrice}
							</p>
						</>
					)}
				</div>
				<button onClick={handleReset} className="reset">
					Reset
				</button>
			</div>
		</>
	);
}
