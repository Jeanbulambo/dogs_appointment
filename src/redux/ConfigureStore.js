import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AllHotels from './AllHotels/AllHotels';
import HotelDetails from './HotelDetails/HotelDetails';

const store = configureStore({
  reducer: {
    AllHotels, HotelDetails,
  },
  middleware: [thunk],
});

export default store;
