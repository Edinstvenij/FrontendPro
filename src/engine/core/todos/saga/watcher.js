import {takeEvery} from 'redux-saga/effects';
import todosAsyncActions from "./asyncActions";
import callGetTodosWorker from "./workers/getTodos";
import callAddTodoWorker from "./workers/addTodo";
import callDeleteTodoWorker from "./workers/deleteTodo";

function* TodosWatcher() {
    yield takeEvery(todosAsyncActions.getTodosAsync.type, callGetTodosWorker);
    yield takeEvery(todosAsyncActions.addTodoAsync.type, callAddTodoWorker);
    yield takeEvery(todosAsyncActions.deleteTodoAsync.type, callDeleteTodoWorker);
}

export default TodosWatcher;