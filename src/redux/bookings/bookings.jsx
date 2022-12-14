/* eslint-disable no-param-reassign */
/* eslint linebreak-style: ["error", "windows"] */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../api/ApiUrl';

// Action types
const FETCHED_BOOKINGS = 'bookings/INDEX';
const ADDED_BOOKING = 'bookings/CREATE';
const REMOVED_BOOKING = 'bookings/DELETE';

// Create and export action creators
export const FetchedBookings = createAsyncThunk(FETCHED_BOOKINGS, async () => {
  try {
    const endpoint = `${url}/bookings`;
    const token = localStorage.getItem('token');
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    const payload = response.map((booking) => ({
      id: booking.id,
      checking_in: booking.checking_in,
      checking_out: booking.checking_out,
      animal_type: booking.animal_type,
      animal_name: booking.animal_name,
    }));
    return payload;
  } catch (error) {
    return error;
  }
});

export const AddBooking = createAsyncThunk(ADDED_BOOKING, async (booking) => {
  try {
    const endpoint = `${url}/bookings`;
    await axios.post(endpoint, booking);
    const payload = booking;
    return payload;
  } catch (error) {
    return error;
  }
});

export const RemoveBooking = createAsyncThunk(REMOVED_BOOKING, async (id) => {
  try {
    const endpoint = `${url}/bookings/${id}`;
    await axios.delete(endpoint);
    const payload = id;
    return payload;
  } catch (error) {
    return error;
  }
});

// Initialize the state
const initialState = {
  bookings: [],
  loading: 'idle',
};

const reducerBookings = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchedBookings.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(FetchedBookings.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.bookings = action.payload;
      })
      .addCase(FetchedBookings.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      })
      .addCase(AddBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      })
      .addCase(RemoveBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.payload,
        );
      });
  },
});

export default reducerBookings.reducer;
