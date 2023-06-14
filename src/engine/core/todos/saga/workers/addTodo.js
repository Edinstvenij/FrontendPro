import {updateItems} from "../../todosSlice";
import {put, call} from 'redux-saga/effects';

function* callAddTodoWorker(action) {
    const {items, data} = action.payload;
    const {text} = data;
    const checked = true;
    const newItems = [
        ...items,
        {id: Math.random(), text, checked}
    ];

    yield call(() => {
        localStorage.setItem('items', JSON.stringify(newItems));
    })
    yield put(updateItems(newItems));
}

export default callAddTodoWorker;