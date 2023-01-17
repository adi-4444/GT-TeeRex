import React from "react";
import "./Filters.css";

const Filters = () => {
	return (
		<div>
			<div className='colors-div'>
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
			<div className='gneder-div'>
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
					Rs. 250
				</label>
			</div>
			<div className='type-div'>
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
