import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addItemToWishlist: (state, action) => {
            const newItem = action.payload;
            if (!state.find((item) => item.id === newItem.id)) {
                state.push(action.payload)
            }
        },
        removeItemFromWishlist: (state, action) => {
           return state.filter((item) => item.id !== action.payload);
      },
        clearWishlist: (state) => {
           state.length = 0
        }
    }
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;