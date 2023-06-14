import {createAction} from '@reduxjs/toolkit';

const todosAsyncActions = Object.freeze({
    getTodosAsync: createAction('GET_TODOS_ASYNC'),
    addTodoAsync: createAction('ADD_TODO_ASYNC'),
    deleteTodoAsync: createAction('DELETE_TODOS_ASYNC'),
});

export default todosAsyncActions;