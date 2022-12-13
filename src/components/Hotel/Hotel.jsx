import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './Rocket.css';
import { RemoveHotel } from '../../redux/hotels/hotels';

const Hotel = (props) => {
  const { hotel } = props;
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(RemoveHotel(id));
  };
  return (
    <div data-testid="hotel-1" className="home">
      <div className="col-auto" id="subcontent">
        <h3 className="" style={{ color: 'black' }}>FIND PETS HOTELS HERE</h3>
        <p className="subtitle" style={{ color: 'black' }}>Please select one</p>
        <Card.Img
          className="img-fluid"
          style={{ width: '15rem', height: '10rem' }}
          src={hotel.photo}
          alt={hotel.name}
        />
      </div>
      <div className="col">
        <Card.Body>
          <Card.Title className="h2" style={{ marginBottom: '1rem' }}>
            {hotel.name}
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {hotel.description}
          </Card.Text>
          <Button onClick={(e) => handleDelete(e, hotel.id)}>Delete</Button>
        </Card.Body>
      </div>
      <div className="d-flex justify-content-center">
        <div className="p-0 bg-info">Flex item 1</div>
        <div className="p-0 bg-warning">Flex item 2</div>
        <div className="p-0 bg-primary">Flex item 3</div>
      </div>
    </div>
  );
};

Hotel.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};

export default Hotel;
