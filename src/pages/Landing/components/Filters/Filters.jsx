import React from "react";
import {
	COLOUR,
	GENDER,
	PRICE,
	TYPE,
} from "../../../../common/constants/filterConstants";
import { ContextStates } from "../../../../context/Context";
import "./Filters.css";

const Filters = () => {
	const { filterDispatch } = ContextStates();
	const handleColourChange = (e, colour) => {
		const check = e.target.checked;
		filterDispatch({
			type: COLOUR,
			payload: { colour, check },
		});
	};
	const handleGenderChange = (e, gender) => {
		const check = e.target.checked;
		filterDispatch({
			type: GENDER,
			payload: { gender, check },
		});
	};
	const handlePriceChange = (e, price) => {
		const check = e.target.checked;
		filterDispatch({
			type: PRICE,
			payload: { price, check },
		});
	};
	const handleTypeChange = (e, type) => {
		const check = e.target.checked;
		filterDispatch({
			type: TYPE,
			payload: { type, check },
		});
	};

	return (
		<div className='filter-wrapper'>
			<h2>Filters</h2>
			<div className='colors-div'>
				<h3>Colors</h3>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleColourChange(e, "red")}
					/>
					Red
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleColourChange(e, "blue")}
					/>
					Blue
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleColourChange(e, "green")}
					/>
					Green
				</label>
			</div>
			<div className='gender-div'>
				<h3>Gender</h3>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleGenderChange(e, "men")}
					/>
					Men
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleGenderChange(e, "women")}
					/>
					Women
				</label>
			</div>
			<div className='price-div'>
				<h3>Price</h3>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handlePriceChange(e, "0-250")}
					/>
					Rs. 0-250
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handlePriceChange(e, "251-450")}
					/>
					Rs. 251-450
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handlePriceChange(e, "450")}
					/>
					Rs. 450
				</label>
			</div>
			<div className='type-div'>
				<h3>Type</h3>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleTypeChange(e, "pole")}
					/>
					Pole
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleTypeChange(e, "hoodie")}
					/>
					Hoodie
				</label>
				<label>
					<input
						type='checkbox'
						onChange={(e) => handleTypeChange(e, "basic")}
					/>
					Basic
				</label>
			</div>
		</div>
	);
};

export default Filters;
