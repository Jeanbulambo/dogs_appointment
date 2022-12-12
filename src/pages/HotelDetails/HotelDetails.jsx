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
    <div className="row gap-3 d-md-flex">
      <div className="d-flex dm">
        <div>
          <img
            className="rounded-t-lg object-cover w-full h-72 mx-auto d-md-none"
            src={hotel.photo}
            alt={hotel.name}
          />
          <img
            className="rounded-t-lg object-cover w-full h-72 d-none d-md-block"
            src={hotel.photo}
            alt={hotel.name}
          />
        </div>
        <Card style={{ width: '22rem' }} className="mx-auto w-full">
          <Card.Header>{hotel.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{hotel.description}</ListGroup.Item>
            <ListGroup.Item>{hotel.price}</ListGroup.Item>
            <ListGroup.Item>{hotel.rating}</ListGroup.Item>
            <ListGroup.Item>{hotel.location}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default HotelDetails;
