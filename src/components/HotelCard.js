import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './hotelcard.css';

function HotelCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Home Hotel</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        </Card.Text>
        <ul className="hotel-socials">
          <li><img src="" alt="twitter" /></li>
          <li><img src="" alt="facebook" /></li>
          <li><img src="" alt="google+" /></li>
          <li><img src="" alt="v" /></li>
          <li><img src="" alt="p" /></li>
        </ul>
        <Button variant="primary">My profile</Button>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;
