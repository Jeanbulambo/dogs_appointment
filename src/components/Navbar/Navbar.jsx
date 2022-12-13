/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../redux/current_user/current_user';
import { deleteSession } from '../../redux/registration/registration';
import logo from '../images/logo.png';
import './Navbar.css';

const Navigation = () => {
  const authenticated = isAuthenticated();
  const dispatch = useDispatch();
  const [showMenu, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!showMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    dispatch(deleteSession());
    window.location.href = '/sign-in';
  };
  return (
    <nav className={showMenu ? 'navbar toggle' : 'navbar'}>
      <div className="hamburger-menu" onClick={toggleMenu} onKeyDown={toggleMenu} role="presentation">
        <i className="fa-solid fa-bars" />
      </div>

      <div className="logo-div">
        <img
          src={logo}
          alt="logo"
          className="logo-img"
        />
      </div>
      <ul className="nav-ul">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'non-active')}
            to="/"
            onClick={toggleMenu}
          >
            <span>HOME</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'non-active')}
            to="/about"
            onClick={toggleMenu}
          >
            <span>ABOUT</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'none')}
            to="/add-booking"
            onClick={toggleMenu}
          >
            <span>BOOKING</span>
          </NavLink>
        </li>
        {authenticated ? (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'none')}
                to="/add-booking"
                onClick={toggleMenu}
              >
                <span>BOOKINGS</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'none')}
                to="/add-hotel"
                onClick={toggleMenu}
              >
                <span>ADD HOTEL</span>
              </NavLink>
            </li>
            <li>
              <form onSubmit={handleSubmit}>
                <button className="logout" type="submit">
                  {' '}
                  LOGOUT
                </button>
              </form>
            </li>
          </>
        ) : (
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'non-active')} to="/" onClick={toggleMenu}>
              <span>SIGN IN</span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
