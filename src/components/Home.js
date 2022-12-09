import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import HotelCard from './HotelCard';
import { getAllHotels } from '../redux/AllHotels/AllHotels';
import './home.css';

const Home = ({ getID }) => {
  let renderedItem = '';
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.AllHotels);
  useEffect(() => {
    dispatch(getAllHotels());
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
