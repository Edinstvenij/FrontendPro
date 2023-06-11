import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Core
import TodoReducer from '../core/todos/todosSlice';

const store = configureStore({
    reducer: {
        todos: TodoReducer,
    },
    middleware: [thunk]
});

export default store;