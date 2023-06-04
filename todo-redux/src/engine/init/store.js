import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../core/todoSlice";

const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export default store;