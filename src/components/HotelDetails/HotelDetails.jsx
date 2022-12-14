/* eslint linebreak-style: ["error", "windows"] */
import { useLocation } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HotelDetails.css';

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;
  console.log(location);
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
        <div class="product-details">
          <h1>{hotel.name}</h1>
          <div className="star-rating">
            {[...Array(5)].map((star) => {
              return <span className="star">&#9733;</span>;
            })}
          </div>
          <p class="information">{hotel.description}</p>
        </div>
    </div>
  );
};

export default HotelDetails;
