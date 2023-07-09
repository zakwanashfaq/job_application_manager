import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../db';

export const fetchData = createAsyncThunk(
  'mySlice/fetchData',
  async () => {
    const data = await db.items.toArray();
    return data;
  }
);

export const selectAllItems = (state) => [...state.items.value]

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
    deleteItem: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
      try {
        (async () => {
          await db.items.delete(action.payload);
        })();
      } catch (error) {
        throw(error);
      }
    },
    updateItem: (state, item) => {
      throw("Update is not implemented yet!");
      // state.value += action.payload
    },
    getAllItems: (state, action) => {
      return state.value;
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


export const { addItem, deleteItem, updateItem, getAllItems } = itemsSlice.actions
export default itemsSlice.reducer