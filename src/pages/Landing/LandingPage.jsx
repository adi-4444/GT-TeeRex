import React, { useState } from "react";
import Navbar from "../common/Header/Navbar";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import "./LandingPage.css";

const LandingPage = () => {
	const [showFilter, setShowFilter] = useState(false);
	const showFilters = () => {
		setShowFilter(!showFilter);
	};
	return (
		<div>
			<Navbar />
			<div className='app-body'>
				<Filters showFilters={showFilters} />
				<Products showFilter={showFilter} />
			</div>
		</div>
	);
};

export default LandingPage;
