import { useRef } from 'react';
import PropTypes from 'prop-types';

const Login = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const login = async (userInfo, setCurrUser) => {
    const url = 'http://localhost:3000/login';
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
      /* eslint-disable no-console */
      console.log(response.headers.get('Authorization'));
      /* eslint-disable no-console */
      localStorage.setItem('token', response.headers.get('Authorization'));
      setCurrUser(data);
    } catch (error) {
      /* eslint-disable no-console */
      console.log('error', error);
      /* eslint-enable no-console */
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email, password: data.password,
      },
    };
    login(userInfo, setCurrUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
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
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet,
        <a href="#signup" onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
};

Login.propTypes = {
  setCurrUser: PropTypes.string.isRequired,
  setShow: PropTypes.string.isRequired,
};

export default Login;
