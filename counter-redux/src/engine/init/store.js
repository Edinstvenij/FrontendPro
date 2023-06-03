import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../core/counterSlice";
// Engine

const Store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default Store;