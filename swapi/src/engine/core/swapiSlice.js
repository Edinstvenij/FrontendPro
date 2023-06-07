import {createSlice} from '@reduxjs/toolkit';

const SwapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        response: undefined,
        urlParam: ''
    },
    reducers: {
        setResponse(state, action) {
            state.response = action.payload;
        },

        setUrlParam(state, action) {
            state.urlParam = action.payload;
        },
        clear(state) {
            state.response = undefined;
            state.urlParam = undefined;
        }
    }
});

export default SwapiSlice.reducer;
export const {setResponse, setUrlParam, clear} = SwapiSlice.actions;