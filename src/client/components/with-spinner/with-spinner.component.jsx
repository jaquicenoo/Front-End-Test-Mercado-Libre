import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
	return isLoading ? (
		<div className='spinner-overlay'>
			<span className='spinner-container' />
		</div>
	) : (
		<WrappedComponent {...otherProps} />
	);
};

export default WithSpinner;
