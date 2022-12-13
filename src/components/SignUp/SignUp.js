import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postSignUp } from '../../redux/registration/registration';

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
      photo: data.photo,
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
      <div>
        <h1>Sign Up</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="name"
          />

          <input
            placeholder="Phone"
            type="text"
            name="phone"
          />

          <input
            placeholder="Photo"
            type="text"
            name="photo"
          />

          <input
            placeholder="Email"
            type="email"
            name="email"
          />

          <input
            placeholder="Password"
            type="password"
            name="password"
          />

          <input
            placeholder="Password confirmation"
            type="password"
            name="password_confirmation"
          />

          <input type="submit" value="Sing Up" />

          <div>
            <Link to="/greetings">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
