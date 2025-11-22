import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const book = action.payload.book;
            const amount = action.payload.amount;
            const exists = state.items.find(item => item.book.id===book.id && item.book.cover === book.cover);

            if (exists) {
                state.items.push({book, amount})
            } else {
                state.items.push({book, amount});
            }

        }
    }
});

export const {addItemToCart} = cartSlice.actions;
export default cartSlice.reducer;