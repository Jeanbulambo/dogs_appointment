import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ReserveHotelAPI } from '../api/api';

function ReserveHotel({ id }) {
  const navigate = useNavigate();
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
    ReserveHotelAPI(data)
      .then((res) => {
        alert(res.statusText);
        navigate('/my-profile');
      })
      .catch((err) => {
        alert(err.message);
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
