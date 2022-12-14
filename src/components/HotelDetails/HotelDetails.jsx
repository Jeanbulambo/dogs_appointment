/* eslint linebreak-style: ["error", "windows"] */
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from '@mui/material';
import { RemoveHotel } from '../../redux/hotels/hotels';
import './HotelDetails.css';

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;
  console.log(location);
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(RemoveHotel(id));
  };
  return (
    <div className="card_details">
        <div className="marquee">
          <div className="marquee-content">
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[0]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[1]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[2]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[3]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[0]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[1]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[2]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[3]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[0]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[1]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[2]} alt={hotel.name} />
            </div>
            <div className="marquee-item">
              <img className="img-details" src={hotel.photo[3]} alt={hotel.name} />
            </div>
          </div>
          {/* <img className="img-details" src={hotel.photo[0]} alt={hotel.name} />
          <img className="img-details" src={hotel.photo[1]} alt={hotel.name} />
          <img className="img-details" src={hotel.photo[2]} alt={hotel.name} />
          <img className="img-details" src={hotel.photo[3]} alt={hotel.name} />
          <FaChevronLeft className="left-arrow" />
          <FaChevronRight className="right-arrow" /> */}
        </div>
        <div className="product-details">
          <h1>{hotel.name}</h1>
          <div className="star-rating">
            <Rating name="read-only" value={hotel.rating} readOnly />
          </div>
          <p className="information">{hotel.description}</p>
        </div>
<<<<<<< HEAD
      </div>
      <button type="button" onClick={(e) => handleDelete(e, hotel.id)}>Delete</button>
=======
>>>>>>> fd44c5a859da4b3bbaa2f364a10f50bbf5ed1728
    </div>
  );
};

export default HotelDetails;
