import React from 'react';

import './product-preview.styles.scss';

const ProductPreview = ({ imageUrl, price, condition, title }) => {
	return (
		<div className='product-preview-container'>
			<img
				width='180'
				height='180'
				className='product-img'
				src={imageUrl}
				alt='product-img'
			/>
			<div className='product-info'>
				<span className='price'>$ {price.amount}</span>
				<span className='title'>{title}</span>
			</div>
			<span className='condition'>{condition}</span>
		</div>
	);
};

export default ProductPreview;
