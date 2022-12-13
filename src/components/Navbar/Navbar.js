import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from 'hamburger-react';
import logo from '../images/logo.png';
import './Navbar.css';


const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Navbar className="navbar">
      <div className="navbar_card">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        {/* <Hamburger id="hamburger" toggled={isOpen} toggle={setOpen} direction="right" /> */}
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
};
export default Navigation;
