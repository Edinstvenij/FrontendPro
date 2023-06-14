import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Core
import TodoReducer from '../core/todos/todosSlice';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        todos: TodoReducer,
    },
    middleware: [thunk, sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
export default store;