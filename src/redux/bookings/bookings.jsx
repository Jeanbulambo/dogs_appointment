/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../api/ApiUrl';

const initialState = {
  data: [],
  status: 'idle',
};

export const FetchedBookings = createAsyncThunk(
  'bookings/getBookings',
  async () => {
    const response = await fetch(`${url}/bookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw response;
  },
);

export const AddBooking = createAsyncThunk(
  'bookings/postBooking',
  async (object) => {
    await fetch(`${url}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(object),
    });
  },
);

export const removeBooking = createAsyncThunk(
  'bookings/deleteBooking',
  async (id) => {
    await fetch(`${url}/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
  },
);

export const reducerBookings = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchedBookings.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(FetchedBookings.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default reducerBookings.reducer;
