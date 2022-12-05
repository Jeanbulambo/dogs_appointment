import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HotelCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Home Hotel</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
          <ul>
            <li><img src="" alt="twitter"></img></li>
            <li><img src="" alt="facebook"></img></li>
            <li><img src="" alt="google+"></img></li>
            <li><img src="" alt="v"></img></li>
            <li><img src="" alt="p"></img></li> 
          </ul>
        <Button variant="primary">My profile</Button>
      </Card.Body>
    </Card>
  );
}

export default HotelCard;
