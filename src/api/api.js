/* eslint-disable camelcase */
import axios from 'axios';

export const getHotels = async () => {
  const companies = await axios({
    method: 'GET',
    url: 'http://localhost:5000/hotels',
  }).then((response) => response.data)
    .catch((err) => err.message);
  return companies;
};

export const HotelDetails = async (id) => {
  const details = await axios({
    method: 'GET',
    url: `http://localhost:5000/hotels/${id}`,
  }).then((response) => response.data)
    .catch((err) => err.message);
  return details;
};

export const ReserveHotelAPI = async ({
  animal_name, animal_type, checking_in, checking_out, hotel_id, user_id,
}) => {
  const message = await axios({
    method: 'POST',
    url: 'http://localhost:5000/bookings',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: {
      animal_name, animal_type, checking_in, checking_out, hotel_id, user_id,
    },
  });
  return message;
};

export default 'hhh';
