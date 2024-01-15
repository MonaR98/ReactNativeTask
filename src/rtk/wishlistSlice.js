import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const filteredData = state.filter((index) => {
                return index!==action.payload
            })
            return filteredData;
        },
        clear: (state) => {
            state.items.length = 0
        }
    }
});

export const { addItem, removeItem, clear } = wishlistSlice.actions;

export default wishlistSlice.reducer;