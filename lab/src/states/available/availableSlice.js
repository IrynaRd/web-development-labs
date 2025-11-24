import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    loading: false,
    error: null,
};

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        setInventory: (state, action) => {
            state.books = action.payload;
            state.loading = false;
        },
        
        setInventoryLoading: (state, action) => {
            state.loading = action.payload;
        },
        
        
        decreaseAvailability: (state, action) => {
            const { bookId, amountToDecrease } = action.payload;
            
            const bookToUpdate = state.books.find(book => book.id === bookId);
            
            if (bookToUpdate) {
                bookToUpdate.availability = Math.max(0, bookToUpdate.availability - amountToDecrease);
            }
        },
        increaseAvailability: (state, action) => {
            const { bookId, amountToIncrease } = action.payload;
            
            const bookToUpdate = state.books.find(book => book.id === bookId);
            
            if (bookToUpdate) {
                const currentAvailability = Number(bookToUpdate.availability);
                const increaseAmount = Number(amountToIncrease);

                bookToUpdate.availability = currentAvailability + increaseAmount;
            }
        },
    }
});

export const { setInventory, setInventoryLoading, decreaseAvailability, increaseAvailability } = inventorySlice.actions;
export default inventorySlice.reducer;