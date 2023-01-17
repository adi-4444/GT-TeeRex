import React from "react";
import Navbar from "../common/Header/Navbar";
import Filters from "./components/Filters/Filters";
import "./LandingPage.css";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Filters />
		</div>
	);
};

export default LandingPage;
