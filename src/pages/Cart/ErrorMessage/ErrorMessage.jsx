import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = () => {
	return (
		<div className='message-wrapper'>
			<h2 className='error-message'>
				Some products are out of stock ! or available only limited
				stocks
			</h2>
		</div>
	);
};

export default ErrorMessage;

export const SuccessMesage = () => {
	return (
		<div className='success-wrapper'>
			<h2 className='success-message'>Order Processed Successfully</h2>
		</div>
	);
};
