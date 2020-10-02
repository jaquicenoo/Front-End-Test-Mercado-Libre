import { takeLatest, put, call, all } from 'redux-saga/effects';
import ItemActionTypes from './item.types';
import axios from 'axios';
import { searchItemsSuccess, searchItemsFailure } from './item.actions';

export function* searchItemsAsync({ payload }) {
	try {
		const items = yield axios.get(
			`http://localhost:5000/api/items?q=${payload}`
		);
		yield put(searchItemsSuccess(items.data));
	} catch (error) {
		yield put(searchItemsFailure(error.message));
	}
}

export function* searchItemsStart() {
	yield takeLatest(ItemActionTypes.SEARCH_ITEMS_START, searchItemsAsync);
}

export function* itemSagas() {
	yield all([call(searchItemsStart)]);
}
