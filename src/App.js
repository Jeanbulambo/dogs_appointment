/* eslint linebreak-style: ["error", "windows"] */
// last one
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ReactLocation } from 'react-location';
import './components/app.css';
import Navigation from './components/Navbar/Navbar';
import Hotels from './components/Hotels/Hotels';
import AddHotelForm from './pages/AddHotel/AddHotelForm';
import HotelDetails from './components/HotelDetails/HotelDetails';
import SignInPage from './pages/Signin/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import About from './pages/About/About';
import Booking from './pages/Booking/Booking';

function App() {
  const location = new ReactLocation();
  return (
    <div className="App">
      <Router location={location}>
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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
