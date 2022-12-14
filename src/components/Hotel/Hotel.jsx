/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import Card from '../../UI/Card';
import './Hotel.css';

const Hotel = (props) => {
  const { hotel } = props;
  return (
    <Card>
      <div className="image-card">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-img">
              <img
                className="img-fluid"
                src={hotel.photo[0]}
                alt={hotel.name}
              />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{hotel.name}</h3>
          <div>
            <p>Price : ${hotel.price}</p>
            <p>
              {' '}
              📍
              {hotel.location}
            </p>
          </div>
          <div className="star-rating">
            <Rating name="read-only" value={hotel.rating} readOnly />
          </div>
        </div>
      </div>
    </Card>
  );
};

Hotel.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    rating: PropTypes.number,
    location: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Hotel;
