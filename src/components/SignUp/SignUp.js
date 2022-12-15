/* eslint-disable linebreak-style */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../../redux/registration/registration';
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const user = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };
    console.log(user);
    dispatch(postSignUp(user));
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="h1">Sign Up</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="form-signup">
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="input-signup"
          />

          <input
            placeholder="Phone"
            type="text"
            name="phone"
            className="input-signup"
          />

          <input
            placeholder="Email"
            type="email"
            name="email"
            className="input-signup"
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
            className="input-signup"
          />

          <input
            placeholder="Password confirmation"
            type="password"
            name="password_confirmation"
            className="input-signup"
          />

          <input className="button" type="submit" value="Sing Up" />

          <div className="button">
            <Link to="/" className="sigin-btn">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
