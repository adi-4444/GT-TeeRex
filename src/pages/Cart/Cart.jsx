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
import ErrorMessage, { SuccessMesage } from "./ErrorMessage/ErrorMessage";

const Cart = () => {
	const [total, setTotal] = useState();
	const [availableStock, setAvailableStock] = useState();
	const [outOfStock, setOutOfStock] = useState();

	const {
		cartState: { cart },
		cartDispatch,
	} = ContextStates();

	useEffect(() => {
		setTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	const proceedHandler = () => {
		const checkStock = cart.filter((item) => item.qty > item.quantity);
		if (checkStock.length > 0) {
			setOutOfStock(true);
		} else {
			setAvailableStock(true);
		}
		setTimeout(() => {
			setOutOfStock(false);
			setAvailableStock(false);
		}, 3000);
	};
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
									<p className='outofstock'>
										{outOfStock &&
											p.quantity === 0 &&
											"Out Of Stock"}
										{outOfStock &&
											p.qty > p.quantity &&
											p.quantity !== 0 &&
											`Avalable Only ${p.quantity}`}
									</p>
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
												p.qty >= p.quantity
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
						<button
							onClick={() => proceedHandler()}
							className='proceed'
						>
							Proceed to Payment
						</button>
						<h3 className='total-items'>
							No.of Items in cart: {cart.length}
						</h3>
					</div>
				) : (
					""
				)}
			</div>
			{availableStock && <SuccessMesage />}
			{outOfStock && <ErrorMessage />}
		</div>
	);
};

export default Cart;
