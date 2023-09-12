import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import itemReducer from './items';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    items: itemReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
        // Ignore these action types
        ignoredActions: ['userStore/setUser'],
        // Ignore these field paths in all actions and states
        ignoredPaths: ['user.value.user']
    }
}),
})