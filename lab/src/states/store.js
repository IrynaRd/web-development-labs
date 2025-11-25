import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { saveState } from './cartList/cartList'; 
import inventoryReducer, { saveInventoryState } from './available/availableSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        inventory: inventoryReducer,
     }
});

store.subscribe(() => {
    saveState(store.getState().cart);
});

store.subscribe(() => {
    const state = store.getState();
    saveInventoryState(state.inventory); 
});