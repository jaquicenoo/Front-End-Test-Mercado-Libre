import React, { useEffect } from 'react';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { searchItemsStart } from '../../redux/item/item.actions';
import ProductGrid from '../../components/product-grid/product-grid.component';

import './search.styles.scss';
import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';

const SearchView = ({ location: { search }, searchItemsStart }) => {
	useEffect(() => {
		const params = queryString.parse(search);
		searchItemsStart(params.q);
	});
	return (
		<div className='search-view-container'>
			<BreadCrumb />
			<ProductGrid />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	searchItemsStart: (searhText) => dispatch(searchItemsStart(searhText)),
});

export default connect(null, mapDispatchToProps)(SearchView);
