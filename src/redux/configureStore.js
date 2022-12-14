/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';
import reducerHotels from './hotels/hotels';
import reducerBookings from './bookings/bookings';
import registration from './registration/registration';
import user from './user/user';

const store = configureStore({
  reducer: {
    hotels: reducerHotels,
    bookings: reducerBookings,
    registration,
    user,
  },
});

export default store;
