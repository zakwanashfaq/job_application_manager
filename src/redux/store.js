import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './items';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    items: itemReducer,
    user: userReducer
  },
})