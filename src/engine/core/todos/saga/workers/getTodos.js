import {updateItems} from "../../todosSlice";
import {put} from 'redux-saga/effects';

function* callGetTodosWorker() {
    yield put(updateItems(JSON.parse(localStorage.getItem('items'))));
}

export default callGetTodosWorker;