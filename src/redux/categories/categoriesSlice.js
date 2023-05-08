import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.includes('Under Construction')) {
        return ['Under Construction'];
      }
      return ['Under Construction'];
    },
  },
});

export const { status } = categoriesSlice.actions;
export default categoriesSlice.reducer;
