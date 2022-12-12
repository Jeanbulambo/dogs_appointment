import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import './Navbar.css';

const Navigation = () => (
  <Navbar className="navbar">
    <div className="navbar_card">
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
      <div className="link-hotel-container">
        <NavLink
          to="/"
          className="link-hotel"
        >
          Hotels
        </NavLink>
        <NavLink
          to="/add-hotel"
          className="link-hotel"
        >
          Add hotel
        </NavLink>
        <NavLink
          to="/add-booking"
          className="link-hotel"
        >
          Add booking
        </NavLink>

      </div>
    </div>
  </Navbar>
);

export default Navigation;
