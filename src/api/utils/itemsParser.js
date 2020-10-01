const author = {
	name: 'jhon',
	lasname: 'quiceno',
};

const getItemsSearch = ({ results = [], filters }) => {
	const categories = filters.find((filter) => filter.id === 'category');
	return {
		author,
		categories: categories
			? categories.values.map((cat) =>
					cat.path_from_root.map((root) => root.name)
			  )
			: [],
		items: results.map((item) => ({
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: parseFloat(item.installments.amount),
				decimals: 0,
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
		})),
	};
};

const getItemsDetail = (item, { plain_text }) => {
	return {
		author,
		item: {
			id: item.id,
			title: item.title,
			price: {
				currency: item.currency_id,
				amount: parseFloat(item.price),
				decimals: 0,
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping,
			description: plain_text,
		},
	};
};

module.exports = { getItemsSearch, getItemsDetail };
