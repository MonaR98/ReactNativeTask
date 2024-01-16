import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({...newItem,quantity:1})
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload.id;
            const existingItem = state.find((item) => item.id === itemId)
            const existingItemIndex = state.findIndex((item) => item.id === itemId)
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state = state.splice(existingItemIndex,1)
                }
            }
        },
        clearCart: (state) => {
            state.length = 0
        },
      
        increaseCount: (state, action) => {
           return state.map((item)=>item.id === action.payload.id ? {...item, quantity:item.quantity+1}:item) 
       }
    }
});

export const { addItem, removeItem, clearCart,increaseCount  } = cartSlice.actions;

export default cartSlice.reducer;