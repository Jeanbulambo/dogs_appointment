import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import AllHotels from './AllHotels/AllHotels';
import HotelDetails from './HotelDetails/HotelDetails';
import Reservations from './Reservations/Reservations';

const store = configureStore({
  reducer: {
    AllHotels, HotelDetails, Reservations,
  },
  middleware: [thunk],
});

export default store;
