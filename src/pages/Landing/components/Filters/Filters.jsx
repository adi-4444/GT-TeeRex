import React from "react";
import "./Filters.css";

const Filters = () => {
	return (
		<div className='filter-wrapper'>
			<div className='colors-div'>
				<h3>Colors</h3>
				<label>
					<input type='checkbox' />
					Red
				</label>
				<label>
					<input type='checkbox' />
					Blue
				</label>
				<label>
					<input type='checkbox' />
					Green
				</label>
			</div>
			<div className='gender-div'>
				<h3>Gender</h3>
				<label>
					<input type='checkbox' />
					Men
				</label>
				<label>
					<input type='checkbox' />
					Women
				</label>
			</div>
			<div className='price-div'>
				<h3>Price</h3>
				<label>
					<input type='checkbox' />
					Rs. 0-250
				</label>
				<label>
					<input type='checkbox' />
					Rs. 251-450
				</label>
				<label>
					<input type='checkbox' />
					Rs. 450
				</label>
			</div>
			<div className='type-div'>
				<h3>Type</h3>
				<label>
					<input type='checkbox' />
					Pole
				</label>
				<label>
					<input type='checkbox' />
					Hoodie
				</label>
				<label>
					<input type='checkbox' />
					Basic
				</label>
			</div>
		</div>
	);
};

export default Filters;
