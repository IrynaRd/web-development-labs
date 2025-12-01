import { createSlice } from "@reduxjs/toolkit";
const storage_key = 'cart';
const doba = 24 * 3600 * 1000;

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(storage_key);
        if (serializedState === null) {
            return undefined;
        }
        const savedData = JSON.parse(serializedState);
        
        if (savedData.timestamp && (Date.now() - savedData.timestamp > doba)) {
            localStorage.removeItem(storage_key);
            return undefined;
        }

        return savedData.cart;
    } catch (err) {
        console.error(err);
        return undefined;
    }
};

export const saveState = (cartState) => {
    try {
        const dataToSave = {
            cart: cartState,
            timestamp: Date.now()
        };
        const serializedState = JSON.stringify(dataToSave);
        localStorage.setItem(storage_key, serializedState);
    } catch (err) {
        console.error(err);
    }
};

const persistedState = loadState();

const initialState = persistedState ? persistedState : {
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
        },

        clearList: (state) => {
            state.items = [];
        }
    }
});

export const {addItemToCart, updateAmount, removeItem, clearList} = cartSlice.actions;
export default cartSlice.reducer;