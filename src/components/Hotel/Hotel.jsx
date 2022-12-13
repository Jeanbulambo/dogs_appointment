import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../UI/Card';
import './Hotel.css';
import { RemoveHotel } from '../../redux/hotels/hotels';

const Hotel = (props) => {
  const { hotel } = props;
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(RemoveHotel(id));
  };
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
            <p>Price : $ {hotel.price}</p>
            <p> 📍 {hotel.location}</p>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((star) => {        
              return (         
                <span className="star">&#9733;</span>        
              );
            })}
          </div>
          <button onClick={(e) => handleDelete(e, hotel.id)}>Delete</button>
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
  }).isRequired,
};

export default Hotel;
