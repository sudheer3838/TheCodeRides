import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientSlice';

const store = configureStore({
  reducer: {
    clients: clientReducer,
  },
});

export default store;
