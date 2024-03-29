import React from "react";
import { ADD_TO_CART } from "../../../../common/constants/cartConstants";
import { ContextStates } from "../../../../context/Context";
import "./Product.css";

const Product = ({ productsData }) => {
	const { data, status } = productsData;
	const {
		cartState: { cart },
		cartDispatch,
	} = ContextStates();
	const addToCartHandler = (product) => {
		cartDispatch({
			type: ADD_TO_CART,
			payload: product,
		});
	};
	return (
		<div className='products-container'>
			{status === 200
				? data?.map((product) => (
						<div className='product-wrapper' key={product.id}>
							<img
								className='card-image'
								src={product.imageURL}
								alt='img'
							/>
							<h3 className='card-name'>{product.name}</h3>
							<div className='card-bottom'>
								<h4>Rs.{product.price}</h4>
								<button
									onClick={() => addToCartHandler(product)}
									disabled={
										cart.find((p) => p.id === product.id)
											? true
											: false
									}
								>
									{cart.find((p) => p.id === product.id)
										? "Already in Cart"
										: "Add to Cart"}
								</button>
							</div>
						</div>
				  ))
				: "Cannot fetch data at the moment"}
		</div>
	);
};

export default Product;
