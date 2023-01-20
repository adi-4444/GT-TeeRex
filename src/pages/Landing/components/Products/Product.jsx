import React from "react";
import "./Product.css";

const Product = ({ productsData }) => {
	console.log(productsData);
	return (
		<div className='products-container'>
			{productsData &&
				productsData.map((product) => (
					<div className='product-wrapper' key={product.id}>
						<img
							className='card-image'
							src={product.imageURL}
							alt='Image'
						/>
						<h3 className='card-name'>{product.name}</h3>
						<div className='card-bottom'>
							<h4>Rs.{product.price}</h4>
							<button>Add to Cart</button>
						</div>
					</div>
				))}
		</div>
	);
};

export default Product;