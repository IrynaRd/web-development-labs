import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counter/counterSlice';
import cartReducer from './cartList/cartList';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})