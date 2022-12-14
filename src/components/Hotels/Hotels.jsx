/* eslint linebreak-style: ["error", "windows"] */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchedHotels } from '../../redux/hotels/hotels';
import Hotel from '../Hotel/Hotel';
import './Hotels.css';

const Hotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.data);
  useEffect(() => {
    dispatch(FetchedHotels());
  }, [dispatch]);
  return (
    <div className="container-hotel">
      {hotels.map((hotel) => (
        <Link
          to="/details"
          key={hotel.id}
          state={hotel}
          style={{ textDecoration: 'none' }}
        >
          <Hotel key={hotel.id} hotel={hotel} />
        </Link>
      ))}
    </div>
  );
};

export default Hotels;
