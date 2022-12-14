/* eslint-disable linebreak-style */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../../redux/registration/registration';
import './signUp.css';

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
    <div>
      <div >
        <form ref={formRef} onSubmit={handleSubmit}>
         <div class="container">
           <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <label for="name"><b>Name</b></label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            id="name"
          />
          <label for="phone"><b>Phone</b></label>
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            id="phone"
          />

         <label for="email"><b>Email</b></label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
          />

          <label for="psw"><b>Password</b></label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="psw"
          />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input
            placeholder="Password confirmation"
            type="password"
            name="password_confirmation"
            id="psw-repeat"
          />
          <hr />

          <input type="submit" value="Sing Up" class="registerbtn"/>

          <div>
            <Link to="/">Sign In</Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
