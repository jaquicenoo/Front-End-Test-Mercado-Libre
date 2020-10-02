import ItemActionTypes from './item.types';

const INITIAL_STATE = {
	categories: null,
	author: null,
	items: null,
	isFetching: false,
	errorMessage: undefined,
};

const itemReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ItemActionTypes.SEARCH_ITEMS_START:
			return {
				...state,
				isFetching: true,
			};
		case ItemActionTypes.SEARCH_ITEMS_SUCCESS:
			return {
				...state,
				isFetching: false,
				items: action.payload.items,
				categories: action.payload.categories,
				author: action.payload.author,
			};
		case ItemActionTypes.SEARCH_ITEMS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default itemReducer;
