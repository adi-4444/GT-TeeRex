import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../../common/apis/getProducts";
import Product from "./Product";
import { ContextStates } from "../../../../context/Context";

const Products = ({ showFilters, setShowFilter }) => {
	const [productsData, setProductsData] = useState([]);
	const [search, setSearch] = useState("");
	const { status } = productsData;
	console.log(status);
	useEffect(() => {
		if (status === 403) {
			setShowFilter(false);
		}
		// eslint-disable-next-line
	}, [status]);
	const {
		filters: { colours, gender, price, type },
	} = ContextStates().filterState;

	const fetchProducts = async () => {
		const data = await getProducts();
		setProductsData(data);
	};
	useEffect(() => {
		fetchProducts();
		// eslint-disable-next-line
	}, []);

	const filterProducts = () => {
		let filteredProducts = productsData;
		if (search) {
			filteredProducts = filteredProducts.filter((item) =>
				(item.name || item.color || item.type)
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}
		if (colours.length > 0) {
			filteredProducts = filteredProducts.filter((item) =>
				colours.includes(item.color)
			);
		}
		if (gender.length > 0) {
			filteredProducts = filteredProducts.filter((item) =>
				gender.includes(item.gender)
			);
		}
		if (price.length > 0) {
			filteredProducts = filteredProducts.filter((item) => {
				for (let i = 0; i < price.length; i++) {
					const range = price[i].split("-");
					const minPrice = Number(range[0]);
					const maxPrice = range[1] ? Number(range[1]) : Infinity;
					if (item.price >= minPrice && item.price <= maxPrice) {
						return true;
					}
				}
				return false;
			});
		}
		if (type.length > 0) {
			filteredProducts = filteredProducts.filter((item) =>
				type.includes(item.type)
			);
		}
		return filteredProducts;
	};
	const filteredProducts = filterProducts();

	return (
		<div className='products-wrapper'>
			<div className='products-header'>
				<div className='search-div'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1.5em'
						height='1.5em'
						viewBox='0 0 24 24'
						className='search-icon'
					>
						<path
							fill='black'
							d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z'
						/>
					</svg>
					<input
						type='search'
						className='search'
						name='search'
						placeholder='Search'
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className='filter-div'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1.7em'
						height='1.7em'
						viewBox='0 0 24 24'
						className='filter-icon'
						onClick={showFilters}
					>
						<path
							fill='#6c6767'
							d='M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z'
						/>
					</svg>
				</div>
			</div>

			<Product productsData={filteredProducts} />
		</div>
	);
};

export default Products;
