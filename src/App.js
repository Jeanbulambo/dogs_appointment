/* eslint-disable linebreak-style */
// last one
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/app.css';
import Navigation from './components/Navbar/Navbar';
import Hotels from './components/Hotels/Hotels';
import AddHotelForm from './pages/AddHotel/AddHotelForm';
import HotelDetails from './components/HotelDetails/HotelDetails';
import SignInPage from './pages/Signin/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import About from './pages/About/About';
import Booking from './pages/Booking/Booking';
import MyBookings from './pages/MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <main className="main">
          <Routes>
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-hotel" element={<AddHotelForm />} />
            <Route path="/add-booking" element={<Booking />} />
            <Route path="/details" element={<HotelDetails />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/my-bookings" element={<MyBookings />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
