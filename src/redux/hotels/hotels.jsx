/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../api/ApiUrl';

const initialState = {
  data: [],
  status: 'idle',
};

export const FetchedHotels = createAsyncThunk(
  'hotels/getHotels',
  async () => {
    const response = await fetch(`${url}/hotels`, {
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

export const AddHotel = createAsyncThunk(
  'hotels/postHotels',
  async (object) => {
    await fetch(`${url}/hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(object),
    });
  },
);

export const removeHotel = createAsyncThunk(
  'hotels/deleteHotel',
  async (id) => {
    await fetch(`${url}/hotels/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
  },
);

export const reducerHotels = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchedHotels.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'succeeded';
      })
      .addCase(FetchedHotels.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default reducerHotels.reducer;
