import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	DECREASE_QTY,
	INCREASE_QTY,
	REMOVE_FROM_CART,
} from "../../common/constants/cartConstants";
import { ContextStates } from "../../context/Context";
import Navbar from "../common/Header/Navbar";
import "./Cart.css";

const Cart = () => {
	const [total, setTotal] = useState();
	const {
		cartState: { cart },
		cartDispatch,
	} = ContextStates();
	console.log(cart);
	useEffect(() => {
		setTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);
	return (
		<div>
			<Navbar />
			<div className='cart-page-wrapper'>
				<div className='cart-products'>
					{cart.length > 0 ? (
						cart.map((p) => (
							<div className='cart-product' key={p.id}>
								<img
									className='product-image'
									src={p.imageURL}
									alt='img'
								/>
								<div className='product-details'>
									<h2 className='product-name'>{p.name}</h2>
									<h3 className='product-price'>
										Rs. {p.price}
									</h3>
									<div className='qty'>
										<button
											className='remove-qty'
											onClick={() =>
												cartDispatch({
													type: DECREASE_QTY,
													payload: p,
												})
											}
											disabled={p.qty <= 1 ? true : false}
										>
											-
										</button>

										<span className='qty-count'>
											{p.qty}
										</span>
										<button
											className='add-qty'
											onClick={() =>
												cartDispatch({
													type: INCREASE_QTY,
													payload: p,
												})
											}
											disabled={
												p.qty === p.quantity
													? true
													: false
											}
										>
											+
										</button>
									</div>
									<button
										className='remove-item'
										onClick={() =>
											cartDispatch({
												type: REMOVE_FROM_CART,
												payload: p,
											})
										}
									>
										Remove Form Cart
									</button>
								</div>
							</div>
						))
					) : (
						<h2>
							Your Cart is Empty !{" "}
							<Link to={"/"}>Add Products</Link>
						</h2>
					)}
				</div>
				{cart.length > 0 ? (
					<div className='total-count'>
						<h2 className='total-amount'>Total Amount : {total}</h2>
						<button className='proceed'>Proceed to Payment</button>
						<h3 className='total-items'>
							No.of Items in cart: {cart.length}
						</h3>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Cart;
