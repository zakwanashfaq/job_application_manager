import { createSlice } from '@reduxjs/toolkit'
import Dexie from 'dexie';


const fetchFromDB = () => {
  const request = window.indexedDB.open("items", 1);
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("items", { keyPath: "itemsKey" });
    
  };
  let db;
  request.onerror = (event) => {
    console.error("Need Access to IndexedSb Api to work properly");
  };
  request.onsuccess = (event) => {
    db = event.target.result;
  };
  return {
    db,
    value:[
     {id: 'f6ec73d9-991a-4a0a-aa73-aa13c2f4dac4', applied: false, name: 'This Application is an aplha build. Backend and Database is not yet fully functional.', link: 'zakwanashfaq.com', timeAdded: 1673866489241}
    ]
  }
}

const initialState = fetchFromDB() // todo: fetch from indexedDB


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