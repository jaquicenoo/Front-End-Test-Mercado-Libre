import ItemActionTypes from './item.types';

export const searchItemsStart = (payload) => ({
	type: ItemActionTypes.SEARCH_ITEMS_START,
	payload,
});

export const searchItemsSuccess = (items) => ({
	type: ItemActionTypes.SEARCH_ITEMS_SUCCESS,
	payload: items,
});

export const searchItemsFailure = (errorMessage) => ({
	type: ItemActionTypes.SEARCH_ITEMS_FAILURE,
	payload: errorMessage,
});
