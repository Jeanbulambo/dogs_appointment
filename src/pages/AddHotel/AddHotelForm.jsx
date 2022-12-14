/* eslint linebreak-style: ["error", "windows"] */
// import { IKContext, IKUpload } from "imagekitio-react";
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AddHotel } from '../../redux/hotels/hotels';
// import { AddHotel } from '../../redux/hotels/hotels';

const AddHotelForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hotels = useSelector((state) => state.hotels.data);
  useEffect(() => {}, [hotels]);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const hotel = {
      name: data.name,
      location: data.location,
      rating: data.rating,
      price: data.price,
      photo: data.photo,
      description: data.description,
    };
    dispatch(AddHotel(hotel));
    navigate('/hotels');
  };
  return (
    <Form ref={formRef} onSubmit={handleSubmit()}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" name="location" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="text" placeholder="0" name="rating" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price per day</Form.Label>
        <Form.Control type="text" placeholder="0.0" name="price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="photo">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder=" " name="photo" />
        <Form.Text className="text-muted">
          Add your image or an url.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddHotelForm;
