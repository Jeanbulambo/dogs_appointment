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
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                YOUR BEST HOTELS
                {' '}
                <br />
                <span className="text-primary">JUST SIGN UP</span>
              </h1>
              <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      {' '}
                      <input type="email" id="email" className="form-control" />
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      {' '}
                      <input
                        type="password"
                        id="pass"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="pass">
                        Password
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      SIGN UP
                    </button>
                    <div>
                      Already registered,
                      <a href="#login" onClick={handleClick}>
                        Login
                      </a>
                      {' '}
                      here.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Signup.propTypes = {
  setCurrUser: PropTypes.string.isRequired,
  setShow: PropTypes.string.isRequired,
};
export default Signup;
