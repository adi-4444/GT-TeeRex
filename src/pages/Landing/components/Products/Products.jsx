import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../../common/apis/getProducts";

const Products = () => {
	const [productsData, setProductsData] = useState([]);

	const fetchProducts = async () => {
		const data = await getProducts();
		setProductsData(data.data);
	};
	console.log(productsData);
	useEffect(() => {
		fetchProducts();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='products-wrapper'>
			<h1>Products</h1>
		</div>
	);
};

export default Products;
