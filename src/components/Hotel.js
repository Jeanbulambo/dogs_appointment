import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReserveHotel from './ReserveHotel';
import { HotelDetails } from '../api/api';

const Hotel = ({ id }) => {
  let renderedItem = '';
  const [hotel, setHotel] = useState(null);
  useEffect(() => {
    async function HotelsDetailsData() {
      const results = await HotelDetails(id);
      setHotel(results);
    }
    HotelsDetailsData();
  }, []);
  if (hotel === null) {
    renderedItem = 'Loading';
  } else {
    renderedItem = hotel.name;
  }
  return (
    <div>
      {renderedItem}
      <ReserveHotel id={id} />
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
