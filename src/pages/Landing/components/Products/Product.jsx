import React from "react";
import { ADD_TO_CART } from "../../../../common/constants/cartConstants";
import { ContextStates } from "../../../../context/Context";
import "./Product.css";

const Product = ({ productsData }) => {
	const { cartDispatch } = ContextStates();

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
							<button
								onClick={() =>
									cartDispatch({
										type: ADD_TO_CART,
										payload: product,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
				))}
		</div>
	);
};

export default Product;
