import {all, call} from 'redux-saga/effects';
import TodosWatcher from "../core/todos/saga/watcher";

export default function* rootSaga() {
    yield all([
        call(TodosWatcher),
    ]);
}