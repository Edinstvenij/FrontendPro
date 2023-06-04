import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        amount: 0
    },
    reducers: {
        handleAdd(state, data) {
            const id = Math.round(Math.random() * 1000);
            const item = {
                id: id,
                key: id,
                text: data.payload.text
            }
            state.items.push(item);
            state.amount++;

            // Adding to localStorage. Не понимаю как отображать элементы с локального хранилище
            /*
            const items = JSON.parse(localStorage.getItem('todos')) ?? [];
             items.push(item);
             localStorage.setItem('todos', JSON.stringify(items))
             */
        }
    }
})


export default todoSlice.reducer;
export const {handleAdd} = todoSlice.actions;