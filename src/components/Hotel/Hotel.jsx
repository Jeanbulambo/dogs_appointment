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
    <div className="row no-gutters">
      <div className="col-auto">
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
