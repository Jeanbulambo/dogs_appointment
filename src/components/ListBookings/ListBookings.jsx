/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FetchedBookings } from '../../redux/bookings/bookings';
// import { useEffect } from 'react';
// import { FetchedBookings } from '../../redux/bookings/bookings';
import CardBooking from '../CardBooking/CardBooking';

const ListBookings = () => {
  // const dispatch = useDispatch;
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.data);
  const status = useSelector((state) => state.bookings.status);
  useEffect(() => {
    dispatch(FetchedBookings);
  }, [dispatch]);
  console.log(bookings);
  console.log(status);
  // console.log(state);
  // useEffect(() => { dispatch(FetchedBookings()); }, [dispatch]);
  /* if (bookings.length = 0) {
    return (
      <div className="container-fluid">
        <h3>You do not have bookings now!</h3>
      </div>
    );
  } */
  return (
    <div className="container-fluid">
      {bookings.map((booking) => (
        <CardBooking key={booking.id} />
      ))}
    </div>
  );
};

export default ListBookings;
