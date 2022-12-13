import { useRef } from 'react';
import PropTypes from 'prop-types';

const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrUser) => {
    const url = 'http://localhost:3000/signup';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;

      localStorage.setItem('token', response.headers.get('Authorization'));
      setCurrUser(data);
    } catch (error) {
      /* eslint-disable no-console */
      console.log('error', error);
      /* eslint-disable no-console */
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signup(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </div>
  );
};

Signup.propTypes = {
  setCurrUser: PropTypes.string.isRequired,
  setShow: PropTypes.string.isRequired,
};
export default Signup;
