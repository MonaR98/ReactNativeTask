import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cartSlice';
import WishlistReducer from './wishlistSlice';

const store = configureStore({
    reducer: {
        cart: CartReducer,
        wishlist: WishlistReducer
    }
})

export default store;