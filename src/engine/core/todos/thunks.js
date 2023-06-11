import {updateItems} from "./todosSlice";

export const handleAddTodo = (data) => (dispatch, getState) => {
    const items = getState().todos.items
    const {text} = data;
    const checked = true;
    const newItems = [
        ...items,
        {id: Math.random(), text, checked}
    ];
    dispatch(updateItems(newItems));
    localStorage.setItem('items', JSON.stringify(newItems));
}

export const handleRemoveTodo = (id) => (dispatch, getState) => {
    const items = getState().todos.items;
    const newItems = items.filter(item => item.id !== id);

    dispatch(updateItems(newItems));
    localStorage.setItem('items', JSON.stringify(newItems));
}

export const handleClearTodos = () => (dispatch) => {
    dispatch(updateItems([]));
    localStorage.setItem('items', JSON.stringify([]));
}