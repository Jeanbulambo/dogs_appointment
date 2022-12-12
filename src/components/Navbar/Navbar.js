import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import './Navbar.css';

const Navigation = () => {
  const [state, setState] = useState(1);
  return (
    <Navbar className="navbar">
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ marginRight: '0.5rem', marginLeft: '1rem' }}
        />
      </div>
      <Navbar.Brand href="/" className="mr-auto p-2">
        <Link to="/" className="brand">
          FIND HOTELS FUR PETS
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="Navbar toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="navlinks">
        <Nav>
          <Nav.Link>
            <Link
              to="/"
              style={{
                textDecoration: state === 1 ? 'underline' : 'none',
              }}
              onClick={() => setState(1)}
            >
              Hotels
            </Link>
          </Nav.Link>
          <Nav.Link className="nonActive">
            <Link
              to="/add-hotel"
              style={{
                textDecoration: state === 2 ? 'underline' : 'none',
              }}
              onClick={() => setState(2)}
            >
              Add hotel
            </Link>
          </Nav.Link>
          <div className="line" />
          <Nav.Link className="nonActive">
            <Link
              to="/add-booking"
              style={{
                textDecoration: state === 3 ? 'underline' : 'none',
              }}
              onClick={() => setState(3)}
            >
              Add booking
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
