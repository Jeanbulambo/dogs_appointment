/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isAuthenticated } from '../../redux/current_user/current_user';
import { deleteSession } from '../../redux/registration/registration';
import logo from '../images/logo.png';
import './Navbar.css';

const Navigation = () => {
  const authenticated = isAuthenticated();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!showMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    dispatch(deleteSession());
    // window.location.href = '/';
    navigate('/');
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
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
            to="/"
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
            to="/about"
            onClick={toggleMenu}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
            to="/add-booking"
            onClick={toggleMenu}
          >
            BOOKING
          </NavLink>
        </li>
        {authenticated ? (
          <>
            <li>
              <NavLink
<<<<<<< HEAD
                className={({ isActive }) => (isActive ? 'active-link' : 'none')}
                to="/my-bookings"
                onClick={toggleMenu}
              >
                <span>MY BOOKINGS</span>
=======
                className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
                to="/add-booking"
                onClick={toggleMenu}
              >
                MY BOOKINGS
>>>>>>> fd44c5a859da4b3bbaa2f364a10f50bbf5ed1728
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-link' : 'non-active')}
                to="/add-hotel"
                onClick={toggleMenu}
              >
                ADD HOTEL
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
            <NavLink 
              className={({ isActive }) => (isActive ? 'active' : 'non-active')}
              to="/" 
              onClick={toggleMenu}
            >
              SIGN IN
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
