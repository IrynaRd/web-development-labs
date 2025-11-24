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
                exists.amount += amount;
            } else {
                state.items.push({book, amount});
            }
        },
        updateAmount: (state, action) => {
            const id = action.payload.id;
            const cover = action.payload.cover;
            const amountChange = action.payload.amountChange;
            const exists = state.items.find(item => item.book.id===id && item.book.cover === cover);

            if (exists) {
                exists.amount += amountChange;
                if(exists.amount < 1) {
                    state.items = state.items.filter(
                        item => !(item.book.id === id && item.book.cover === cover)
                    );
                }
            }

        },

        removeItem: (state, action) => {
            const id = action.payload.id;
            const cover = action.payload.cover;
            state.items = state.items.filter(item => !(item.book.id === id && item.book.cover === cover));
            console.log("deleted");
            console.log(state.items);
        }


    }
});

export const {addItemToCart, updateAmount, removeItem} = cartSlice.actions;
export default cartSlice.reducer;