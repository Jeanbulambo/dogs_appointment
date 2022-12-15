/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FetchedBookings } from '../../redux/bookings/bookings';
import CardBooking from '../CardBooking/CardBooking';

const ListBookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.data);
  const status = useSelector((state) => state.bookings.status);
  useEffect(() => {
    dispatch(FetchedBookings());
  }, [dispatch]);
  console.log(bookings);
  console.log(status);
  return (
    <div className="container-fluid">
      {bookings.map((booking) => (
        <CardBooking key={booking.id} booking={booking} />
      ))}
    </div>
  );
};

export default ListBookings;
