import {configureStore} from '@reduxjs/toolkit'
import SwapiReducer from "../core/swapiSlice";

export default configureStore({
    reducer: {
        swapi: SwapiReducer
    },
})