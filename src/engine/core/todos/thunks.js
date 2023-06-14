import {updateItems} from "./todosSlice";
export const handleClearTodos = () => (dispatch) => {
    dispatch(updateItems([]));
    localStorage.setItem('items', JSON.stringify([]));
}