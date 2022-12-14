/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const Bookings = () => {
  const bookings = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container-fluid">
      {
        bookings.map((booking) => (
          <Link
            to="/"
            key={booking.id}
            checking_in={booking.checking_in}
            checking_out={bookings.checking_out}
            animal_type={booking.animal_type}
            animal_name={bookings.animal_name}
          >
            <Booking />
          </Link>

        ))
      }
    </div>
  );
};

export default Bookings;
