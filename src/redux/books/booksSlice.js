import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      const remainingBooks = state.filter((book) => book.id !== itemId);
      state.splice(0, state.length, ...remainingBooks);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
