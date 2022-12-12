import 'bootstrap/dist/css/bootstrap.min.css';
import HotelsList from '../HotelsList/HotelsList';
import './hotels.css';

const Hotels = () => (
  <div className="container-fluid" id="container" style={{ padding: '2rem' }}>
    <HotelsList />
  </div>
);
export default Hotels;
