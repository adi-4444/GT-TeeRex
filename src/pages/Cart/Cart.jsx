import React from "react";
import { ContextStates } from "../../context/Context";
import Navbar from "../common/Header/Navbar";
import "./Cart.css";

const Cart = () => {
	const {
		cartState: { cart },
		cartDispatch,
	} = ContextStates();

	return (
		<div>
			{cart && cart.map}
			<Navbar />
			<h1>Cart</h1>
		</div>
	);
};

export default Cart;
