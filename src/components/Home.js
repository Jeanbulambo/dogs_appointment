import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import HotelCard from './HotelCard';
import './home.css';

const Home = ({ getID }) => {
  let renderedItem = '';
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/hotels');
      setHotels(result.data);
    };

    fetchData();
  }, []);
  const getInput = (input) => {
    getID(input);
  };
  if (hotels === undefined || hotels.length === 0) {
    renderedItem = (
      <p>
        Loading..
      </p>
    );
  } else {
    renderedItem = hotels.map(
      (hotel) => (
        <HotelCard
          key={uuid()}
          name={hotel.name}
          description={hotel.description}
          id={hotel.id}
          image={hotel.photo}
          getInput={getInput}
        />
      ),
    );
  }
  return (
    <div className="home">
      {renderedItem}
    </div>
  );
};

export default Home;

Home.propTypes = {
  getID: PropTypes.func.isRequired,
};
