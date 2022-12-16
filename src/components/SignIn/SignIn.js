/* eslint-disable linebreak-style */
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { postSignIn } from '../../redux/registration/registration';
import { isAuthenticated } from '../../redux/current_user/current_user';
import './signin.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const authenticated = isAuthenticated();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const user = {
      email: data.email,
      password: data.password,
    };
    if (loading) {
      return;
    }
    setLoading(true);
    dispatch(postSignIn(user))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (authenticated) {
    return <Navigate to="/hotels" />;
  }
  return (
    <div className="signin-bg">
      <div className="form-signin">
        <h1>Log In</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="signin">
          <input
            placeholder="email"
            type="email"
            name="email"

          />
          <input
            placeholder="Password"
            type="password"
            name="password"
          />
          <input type="submit" value="Sign In" className="submit-form" />
          <div>
            Not a member?
            {' '}
            <Link to="/sign-up">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
