import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ReserveHotel from './ReserveHotel';
import { getDetails } from '../redux/HotelDetails/HotelDetails';

const Hotel = ({ id }) => {
  let renderedItem = '';
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.HotelDetails);
  useEffect(() => {
    dispatch(getDetails(id));
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
