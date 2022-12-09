/* eslint linebreak-style: ["error", "windows"] */
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;
  console.log(location);
  return (
    <div className="d-flex">
      <div>
        <img
          className="rounded-t-lg object-cover w-full h-72"
          src={hotel.photo}
          alt={hotel.name}
        />
      </div>
      <Card style={{ width: '18rem' }}>
        <Card.Header>{hotel.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{hotel.description}</ListGroup.Item>
          <ListGroup.Item>{hotel.price}</ListGroup.Item>
          <ListGroup.Item>{hotel.rating}</ListGroup.Item>
          <ListGroup.Item>{hotel.location}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default HotelDetails;
