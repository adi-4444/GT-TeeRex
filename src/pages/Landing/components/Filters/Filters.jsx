import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
	CLEAR_FILTERS,
	COLOUR,
	GENDER,
	PRICE,
	TYPE,
} from "../../../../common/constants/filterConstants";
import { ContextStates } from "../../../../context/Context";
import "./Filters.css";

const Filters = ({ showFilter, setShowFilter }) => {
	const { filterDispatch } = ContextStates();
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	// const [newShowFilter, setNewShowFilter] = useState(showFilter);
	const location = useLocation();
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
	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowSize < 500) {
			setShowFilter(false);
		} else {
			setShowFilter(true);
		}
		// eslint-disable-next-line
	}, [windowSize]);

	useEffect(() => {
		clearFilters();
		// eslint-disable-next-line
	}, [location, showFilter]);

	const clearFilters = () => {
		filterDispatch({
			type: CLEAR_FILTERS,
		});
	};

	return (
		<>
			{showFilter && (
				<div className='filter-wrapper'>
					<h2>Filters</h2>
					<div className='colors-div'>
						<h3>Colors</h3>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleColourChange(e, "Red")}
							/>
							Red
						</label>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleColourChange(e, "Blue")}
							/>
							Blue
						</label>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleColourChange(e, "Green")}
							/>
							Green
						</label>
					</div>
					<div className='gender-div'>
						<h3>Gender</h3>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleGenderChange(e, "Men")}
							/>
							Men
						</label>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleGenderChange(e, "Women")}
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
								onChange={(e) =>
									handlePriceChange(e, "251-450")
								}
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
								onChange={(e) => handleTypeChange(e, "Polo")}
							/>
							Pole
						</label>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleTypeChange(e, "Hoodie")}
							/>
							Hoodie
						</label>
						<label>
							<input
								type='checkbox'
								onChange={(e) => handleTypeChange(e, "Basic")}
							/>
							Basic
						</label>
					</div>
				</div>
			)}
		</>
	);
};

export default Filters;
