import {updateItems} from "../../todosSlice";
import {put, call} from 'redux-saga/effects';

function* callDeleteTodoWorker(action) {
    const {items, id} = action.payload;
    const newItems = items.filter(item => item.id !== id);

    yield call(() => {
        localStorage.setItem('items', JSON.stringify(newItems));
    })

    yield put(updateItems(newItems));
}

export default callDeleteTodoWorker;