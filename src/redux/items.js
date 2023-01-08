import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [], // todo: fetch from indexedDB
}

export const itemsSlice = createSlice({
  name: 'itemStore',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
      // todo: save to indexedDB
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
})


export const { addItem, deleteItem, updateItem } = itemsSlice.actions
export default itemsSlice.reducer