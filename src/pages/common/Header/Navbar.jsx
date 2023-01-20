import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				<h1>TeeRex Store</h1>
			</div>
			<div className='content'>
				<h3>Products</h3>
				<div className='cart-icon-div'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='1em'
						height='1em'
						preserveAspectRatio='xMidYMid meet'
						viewBox='0 0 24 24'
						className='cart-icon'
					>
						<path
							fill='currentColor'
							d='M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z'
						/>
					</svg>
					<sup className='cart-count'>1</sup>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
