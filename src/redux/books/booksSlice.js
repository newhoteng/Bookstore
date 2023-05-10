import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = '1ee74UDSIFBzAmI6EKU0';
// const appId = 'or3f9VGJdztMdPwsexmB';
// 0aDjGDxcEz1xoWIOXeZZ, or3f9VGJdztMdPwsexmB, yyVKMNioOwMkQ2nkDALd, J7CNnYilNiTRsEHneh8Q;
// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1ee74UDSIFBzAmI6EKU0/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const getBookItems = createAsyncThunk('books/getBookItems', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${baseUrl}/apps/${appId}/books`);
    const { data } = resp;
    const arrayOfBooks = [];
    Object.entries(data).forEach((entry) => {
      const bookObj = {
        item_id: entry[0],
        title: entry[1][0].title,
        author: entry[1][0].author,
        category: entry[1][0].category,
      };
      arrayOfBooks.push(bookObj);
    });
    // console.log(arrayOfBooks);
    return arrayOfBooks;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

// export const postBook = createAsyncThunk('books/postBook', async (newBook, thunkAPI) => {
//   try {
//     const response = await axios.post(url, newBook);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue('something went wrong');
//   }
// });

// export const deleteBook = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
//   try {
//     const response = await axios.delete(`${url}/${id}`);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue('something went wrong');
//   }
// });

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      const remainingBooks = state.filter((book) => book.item_id !== itemId);
      state.splice(0, state.length, ...remainingBooks);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBookItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBookItems.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
