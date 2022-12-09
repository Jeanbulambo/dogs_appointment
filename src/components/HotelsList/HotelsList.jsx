// Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchedHotels } from '../../redux/hotels/hotels';
import Hotel from '../Hotel/Hotel';

const HotelsList = () => {
  const dispatch = useDispatch();
  const hotelsStatus = useSelector((state) => state.hotels);
  useEffect(() => {
    dispatch(FetchedHotels());
  }, [dispatch]);
  return (
    <div className="d-flex flex-column" style={{ gap: '1rem' }}>
      {hotelsStatus.hotels.map((hotel) => (
        <Link to="/details" key={hotel.id} state={hotel} style={{ textDecoration: 'none' }}>
          <Hotel key={hotel.id} hotel={hotel} />
        </Link>
      ))}
    </div>
  );
};

export default HotelsList;
