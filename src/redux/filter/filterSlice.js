import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterUpdate(state, action) {
            state.value = action.payload;
        },
    },
});

export const { filterUpdate } = filterSlice.actions;
export const filterSelector = state => state.filter;
export const filterReducer = filterSlice.reducer;