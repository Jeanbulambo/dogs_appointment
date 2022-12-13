/* eslint linebreak-style: ["error", "windows"] */
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './HotelDetails.css';

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;
  console.log(location);
  return (
    <div>
    <div className="d-flex-row d-md-flex gap-5">
      <div className="card">
        <img
          className="rounded-t-lg object-cover w-full d-md-flex-column"
          src={hotel.photo}
          alt={hotel.name}
        />
      </div>
      <div className="card">
        <Card style={{ width: '22rem' }} className="border-white" id="listgroup">
          <div id="details-title">{hotel.name}</div>
          <ListGroup variant="flush">
            <ListGroup.Item>{hotel.description}</ListGroup.Item>
            <ListGroup.Item className="list-group-item list-group-item-secondary"><span>Price : $ </span>{hotel.price}</ListGroup.Item>
            <ListGroup.Item><span>Rating : </span>{hotel.rating}</ListGroup.Item>
            <ListGroup.Item className="list-group-item list-group-item-secondary"><span>Location : </span>{hotel.location}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
   </div>
  );
};

export default HotelDetails;
