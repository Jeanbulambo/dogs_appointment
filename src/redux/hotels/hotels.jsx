/* eslint-disable no-param-reassign */
/* eslint linebreak-style: ["error", "windows"] */
// Import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../../api/ApiUrl';

// Action types
const FETCHED_HOTELS = 'hotels/INDEX';
const ADDED_HOTEL = 'hotels/CREATE';
const REMOVED_HOTEL = 'hotels/DELETE';
const SHOW_HOTEL = 'hotels/SHOW';

// Create and export action creators
export const FetchedHotels = createAsyncThunk(FETCHED_HOTELS, async () => {
  try {
    const endpoint = `${url}/hotels`;
    const response = await axios.get(endpoint);
    const payload = response.data.map((hotel) => ({
      id: hotel.id,
      name: hotel.name,
      location: hotel.location,
      rating: hotel.rating,
      price: hotel.price,
      photo: hotel.photo,
      description: hotel.description,
    }));
    return payload;
  } catch (error) {
    return error;
  }
});

export const AddHotel = createAsyncThunk(ADDED_HOTEL, async (hotel) => {
  try {
    const endpoint = `${url}/hotels`;
    await axios.post(endpoint, hotel);
    const payload = hotel;
    return payload;
  } catch (error) {
    return error;
  }
});

export const RemoveHotel = createAsyncThunk(REMOVED_HOTEL, async (id) => {
  try {
    const endpoint = `${url}/hotels/${id}`;
    await axios.delete(endpoint);
    const payload = id;
    return payload;
  } catch (error) {
    return error;
  }
});

export const ShowHotel = createAsyncThunk(SHOW_HOTEL, async (id) => {
  try {
    const endpoint = `${url}/hotels/${id}`;
    await axios.delete(endpoint);
    const payload = id;
    return payload;
  } catch (error) {
    return error;
  }
});

// Initialize the state
const initialState = {
  hotels: [],
  loading: 'idle',
};

const reducerHotels = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchedHotels.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(FetchedHotels.fulfilled, (state, action) => {
        state.status = 'Fulfilled';
        state.hotels = action.payload;
      })
      .addCase(FetchedHotels.rejected, (state, action) => {
        state.status = 'Rejected';
        state.error = action.error.message;
      })
      .addCase(AddHotel.fulfilled, (state, action) => {
        state.hotels.push(action.payload);
      })
      .addCase(RemoveHotel.fulfilled, (state, action) => {
        state.hotels = state.hotels.filter(
          (hotel) => hotel.id !== action.payload,
        );
      });
  },
});

export default reducerHotels.reducer;
