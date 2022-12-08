import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './hotelcard.css';

function HotelCard({
  name, description, id, getInput,
}) {
  const handleEvent = () => {
    getInput(id);
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <div className="d-flex flex-column justify-content-center">
          <Card.Title className="text-center display-4 fw-bold">{name}</Card.Title>
        </div>
        <Card.Text>
          {description}
        </Card.Text>
        <Link to="/hotel"><Button onClick={handleEvent} variant="primary">View Hotel</Button></Link>
        <p className="text-center h6" style={{ height: '3rem', margin: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul className="hotel-socials">
          <li><img src="" alt="twit" /></li>
          <li><img src="" alt="faceb" /></li>
          <li><img src="" alt="google+" /></li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;

HotelCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  getInput: PropTypes.func.isRequired,
};

HotelCard.defaultProps = {
  name: '',
  description: '',
  id: null,
};
