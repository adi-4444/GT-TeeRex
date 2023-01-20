import React from "react";
import Navbar from "../common/Header/Navbar";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<div className='app-body'>
				<Filters />
				<Products />
			</div>
		</div>
	);
};

export default LandingPage;
