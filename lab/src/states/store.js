import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counter/counterSlice';
import cartReducer from './cartList/cartList';
import inventoryReducer from './available/availableSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        inventory: inventoryReducer,
    }
})