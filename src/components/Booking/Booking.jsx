/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Booking.css';

const Booking = (props) => {
  const { booking } = props;
  return (
    <div>
      <p>{booking.animal_name}</p>
      <p>{booking.animal_type}</p>
      <p>{booking.checking_in}</p>
      <p>{booking.checking_out}</p>
    </div>
  );
};

Booking.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number,
    checking_in: PropTypes.string,
    checking_out: PropTypes.string,
    animal_type: PropTypes.string,
    animal_name: PropTypes.string,
  }).isRequired,
};

export default Booking;
