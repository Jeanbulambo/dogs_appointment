import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AllHotels from './AllHotels/AllHotels';

const store = configureStore({
  reducer: {
    AllHotels,
  },
  middleware: [thunk],
});

export default store;
