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
