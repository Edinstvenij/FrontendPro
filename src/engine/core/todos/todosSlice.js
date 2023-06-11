import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        updateItems(state, action) {
            state.items = action.payload;
        }
    }
});

export default todosSlice.reducer;
export const {
    updateItems,
} = todosSlice.actions;

