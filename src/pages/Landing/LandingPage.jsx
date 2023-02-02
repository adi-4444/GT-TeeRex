import React, { useState } from "react";
import Navbar from "../common/Header/Navbar";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import "./LandingPage.css";

const LandingPage = () => {
	const [showFilter, setShowFilter] = useState(true);
	const showFilters = () => {
		setShowFilter(!showFilter);
	};
	return (
		<div>
			<Navbar />
			<div className='app-body'>
				<Filters
					showFilter={showFilter}
					setShowFilter={setShowFilter}
				/>
				<Products showFilters={showFilters} />
			</div>
		</div>
	);
};

export default LandingPage;
