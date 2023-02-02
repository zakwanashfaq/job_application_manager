import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../db';

export const fetchData = createAsyncThunk(
  'mySlice/fetchData',
  async () => {
    const data = await db.items.toArray();
    return data;
  }
);

export const itemsSlice = createSlice({
  name: 'itemStore',
  initialState: {
    value: [],
    isLoading: false,
    error: null
  },
  reducers: {
    addItem: (state, action) => {
      state.value.unshift(action.payload);
      try {
        (async () => {
          await db.items.add(action.payload);
        })();
      } catch (error) {
        throw(error);
      }
    },
    deleteItem: (state, item) => {
      throw("Delete is not implemented yet!");
      //state.value -= 1
    },
    updateItem: (state, item) => {
      throw("Update is not implemented yet!");
      // state.value += action.payload
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      return {
        ...state,
        value: action.payload
      }
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  }
})


export const { addItem, deleteItem, updateItem } = itemsSlice.actions
export default itemsSlice.reducer