import { createSlice } from "@reduxjs/toolkit";
const storage_key = 'userCart';
const doba = 24 * 3600 * 1000;

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(storage_key);
        if (serializedState === null) {
            return {userCarts: {}};
        }
        const savedData = JSON.parse(serializedState);
        
        if (savedData.timestamp && (Date.now() - savedData.timestamp > doba)) {
            localStorage.removeItem(storage_key);
            return {userCarts: {}};
        }

        return savedData.cart;
    } catch (err) {
        console.error(err);
        return {userCarts: {}};
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

const initialState =  {
    ...persistedState,
    userCarts: persistedState.userCarts || {}
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { book, amount, email } = action.payload;
            
            if (!state.userCarts[email]) {
                state.userCarts[email] = [];
            }
            const currentItems = state.userCarts[email];
            const exists = currentItems.find(item => item.book.id===book.id && item.book.cover === book.cover);

            if (exists) {
                exists.amount += amount;
            } else {
                currentItems.push({book, amount});
            }
        },
        updateAmount: (state, action) => {
            const { id, cover, amountChange, email } = action.payload;
           
            if (!state.userCarts[email]) {
                return;
            }
            const currentItems = state.userCarts[email];
            const exists = currentItems.find(item => item.book.id===id && item.book.cover === cover);
            if (exists) {
                exists.amount += amountChange;
                if (exists.amount < 1) {
                    state.userCarts[email] = currentItems.filter(
                        item => !(item.book.id === id && item.book.cover === cover));
                }
            }
        },

        removeItem: (state, action) => {
            const { id, cover, email } = action.payload;
            if (!state.userCarts[email]) return;
            const currentItems = state.userCarts[email];

            state.userCarts[email] = currentItems.filter(item => !(item.book.id === id && item.book.cover === cover));
            console.log("deleted");
        },

        clearList: (state, action) => {
            const { email } = action.payload;
             if (state.userCarts[email]) {
                 state.userCarts[email] = [];
             }
        }
    }
});

export const {addItemToCart, updateAmount, removeItem, clearList} = cartSlice.actions;
export default cartSlice.reducer;