import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function ReserveHotel({ id }) {
  const url = 'http://localhost:5000/bookings';
  const [data, setData] = useState({
    animal_name: '',
    animal_type: '',
    checking_in: '',
    checking_out: '',
    hotel_id: id,
    user_id: 1,
  });

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      animal_name: data.animal_name,
      animal_type: data.animal_type,
      checking_in: data.checking_in,
      checking_out: data.checking_out,
      hotel_id: data.hotel_id,
      user_id: data.user_id,
    })
      .then((res) => {
        console.log(res);
      });
  }
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  return (
    <form onSubmit={(e) => submit(e)}>
      <input onChange={(e) => handleChange(e)} id="animal_name" value={data.animal_name} type="text" placeholder="Please input name of animal" />
      <input onChange={(e) => handleChange(e)} id="animal_type" value={data.animal_type} type="text" placeholder="Please input type of animal" />
      <input onChange={(e) => handleChange(e)} id="checking_in" value={data.checking_in} type="date" placeholder="Check in time" />
      <input onChange={(e) => handleChange(e)} id="checking_out" value={data.checking_out} type="date" name="checking_out" placeholder="Check out time" />
      <button type="submit" name="button">Add Reservation</button>
    </form>
  );
}

export default ReserveHotel;

ReserveHotel.propTypes = {
  id: PropTypes.number,
};

ReserveHotel.defaultProps = {
  id: null,
};
