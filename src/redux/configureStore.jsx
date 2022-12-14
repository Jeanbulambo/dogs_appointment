/* eslint linebreak-style: ["error", "windows"] */
import { configureStore } from '@reduxjs/toolkit';
import bookings from './bookings/bookings';
import reducerHotels from './hotels/hotels';
import registration from './registration/registration';
import user from './user/user';

const store = configureStore({
  reducer: {
    hotels: reducerHotels,
    bookings,
    registration,
    user,
  },
});

export default store;
