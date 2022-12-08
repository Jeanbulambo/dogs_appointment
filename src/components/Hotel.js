import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Hotel = ({ id }) => {
  let renderedItem = '';
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:5000/hotels/${id}`);
      setHotel(result.data);
    };

    fetchData();
  }, []);
  if (hotel === null) {
    renderedItem = 'Loading';
  } else {
    renderedItem = hotel.name;
  }
  return (
    <div>
      {renderedItem}
      <form action="http://localhost:5000/bookings" method="post">
        <input type="text" name="animal_name" placeholder="Please input name of animal" />
        <input type="text" name="animal_type" placeholder="Please input type of animal" />
        <input type="date" name="checking_in" placeholder="Check in time" />
        <input type="date" name="checking_out" placeholder="Check out time" />
        <input name="hotel_id" type="hidden" value={id} />
        <input name="user_id" type="hidden" value="1" />
        <button type="submit" name="button">Add Reservation</button>
      </form>
    </div>
  );
};

export default Hotel;

Hotel.propTypes = {
  id: PropTypes.number,
};

Hotel.defaultProps = {
  id: null,
};
