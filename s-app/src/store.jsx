import { configureStore } from '@reduxjs/toolkit';
import credentialsReducer from './slices/credentialsSlice';

const store = configureStore({
  reducer: {
    credentials: credentialsReducer,
  },
});

export default store;
