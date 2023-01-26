import React from "react";
import {
	ADD_TO_CART,
	INCREASE_QTY,
} from "../../../../common/constants/cartConstants";
import { ContextStates } from "../../../../context/Context";
import "./Product.css";

const Product = ({ productsData }) => {
	const {
		cartState: { cart },
		cartDispatch,
	} = ContextStates();

	const addToCartHandler = (product) => {
		const productExist = cart.find((p) => p.id === product.id);
		if (productExist) {
			cartDispatch({
				type: INCREASE_QTY,
				payload: product,
			});
		} else {
			cartDispatch({
				type: ADD_TO_CART,
				payload: product,
			});
		}
	};
	return (
		<div className='products-container'>
			{productsData &&
				productsData.map((product) => (
					<div className='product-wrapper' key={product.id}>
						<img
							className='card-image'
							src={product.imageURL}
							alt='img'
						/>
						<h3 className='card-name'>{product.name}</h3>
						<div className='card-bottom'>
							<h4>Rs.{product.price}</h4>
							<button onClick={() => addToCartHandler(product)}>
								Add to Cart
							</button>
						</div>
					</div>
				))}
		</div>
	);
};

export default Product;
