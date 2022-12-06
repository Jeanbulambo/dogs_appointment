import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './hotelcard.css';

function HotelCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <div className="d-flex flex-column justify-content-center">
          <Card.Title className="text-center display-4 fw-bold">Availlable pets</Card.Title>
          <p className="text-center h6" style={{ height: '3rem' }}>Please select your choice</p>
        </div>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          <img src="cinqueterre.jpg" className="rounded-circle" alt="Cinque Terre" />
        </Card.Text>
        <h3 className="text-center">PET</h3>
        <Button variant="primary">My profile</Button>
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
