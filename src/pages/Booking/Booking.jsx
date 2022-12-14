/* eslint linebreak-style: ["error", "windows"] */
// import { IKContext, IKUpload } from "imagekitio-react";
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-multi-date-picker';
import { isAuthenticated } from '../../redux/current_user/current_user';
import { AddBooking } from '../../redux/bookings/bookings';
import { FetchedHotels } from '../../redux/hotels/hotels';

const AddBookingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector((state) => state.hotels);
  useEffect(() => {
    dispatch(FetchedHotels());
  }, [dispatch]);
  const formRef = useRef();
  const handleSubmit = (e) => {
    const test = localStorage.getItem('token');
    console.log(test);
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const booking = {
      checking_in: data.checking_in,
      checking_out: data.checking_out,
      animal_type: data.animal_type,
      animal_name: data.animal_name,
      hotel_id: parseInt(data.hotel_id, 10),
    };
    dispatch(AddBooking(booking));
    navigate('/my-bookings');
  };
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="checking_in">
        <Form.Label>Checking in date</Form.Label>
        <DatePicker
          placeholder="Checking in date"
          format="DD/MM/YYYY"
          name="checking_in"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="checking_out">
        <Form.Label>Checking out date</Form.Label>
        <DatePicker
          placeholder="Checking out date"
          format="DD/MM/YYYY"
          name="checking_out"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="animal_type">
        <Form.Label>Animal type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Animal type"
          name="animal_type"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="animal_name">
        <Form.Label>Anymal name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Animal name"
          name="animal_name"
        />
      </Form.Group>

      <Form.Select aria-label="Default select example" name="hotel_id">
        <option>Select the hotel</option>
        {hotels.hotels.map((hotel) => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name}
          </option>
        ))}
      </Form.Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default function Booking() {
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return <AddBookingForm />;
}
