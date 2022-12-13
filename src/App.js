import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/app.css';
import Navigation from './components/Navbar/Navbar';
import Hotels from './components/Hotels/Hotels';
import AddHotelForm from './pages/AddHotel/AddHotelForm';
import AddBookingForm from './pages/AddBooking/AddBookingForm';
import HotelDetails from './components/HotelDetails/HotelDetails';

function NotFound() {
  return <>Page not found</>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route className="hotel_container" path="/" element={<Hotels />} />
          <Route path="/add-hotel" element={<AddHotelForm />} />
          <Route path="/add-booking" element={<AddBookingForm />} />
          <Route path="/details" element={<HotelDetails />} />
          <Route path="*" component={NotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
