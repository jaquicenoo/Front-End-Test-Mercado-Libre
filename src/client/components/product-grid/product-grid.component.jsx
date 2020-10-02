import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectProductPreview,
	selectIsItemsLoaded,
} from '../../redux/item/item.selector';

import ProductPreview from '../product-preview/product-preview.component';

import WithSpinner from '../with-spinner/with-spinner.component';

import './product-grid.styles.scss';

const ProductGrid = ({ products }) => {
	return products.map((product) => (
		<div className='product-grid-container'>
			<ProductPreview
				key={product.id}
				imageUrl={product.picture}
				price={product.price}
				condition={product.condition}
				title={product.title}
			/>
		</div>
	));
};

const mapStateToProps = createStructuredSelector({
	products: selectProductPreview,
	isLoading: (state) => !selectIsItemsLoaded(state),
});

export default WithSpinner(connect(mapStateToProps)(ProductGrid));
