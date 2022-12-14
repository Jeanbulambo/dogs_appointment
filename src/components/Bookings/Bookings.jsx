/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FetchedBookings } from '../../redux/bookings/bookings';
import Booking from '../Booking/Booking';

const Bookings = () => {
  const dispatch = useDispatch;
  const bookings = useSelector((state) => state.bookings.data);
  // const status = useSelector((state) => state.bookings.status);
  useEffect(() => {
    dispatch(FetchedBookings());
  }, [dispatch]);
  if (bookings.lenght < 0) {
    return (
      <div className="container-fluid">
        <h3>You do not have bookings now!</h3>
      </div>
    );
  }
  return (
    <div className="container-fluid">
      {bookingsStatus.hotels.map((booking) => (
        <Booking key={booking.id} />
      ))}
    </div>
  );
};

export default Bookings;
