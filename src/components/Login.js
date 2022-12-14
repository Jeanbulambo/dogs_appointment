import { useRef } from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.png';

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
        email: data.email,
        password: data.password,
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
    <section className="h-100 gradient-form bg-blue">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={logo} style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">We are web developers</h4>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2"
                          className="form-control"
                          placeholder="Phone number or email address"
                        />
                        <label className="form-label" htmlFor="form2">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3">
                          Password
                        </label>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                      />
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2"> Dont have an account?</p>
                        <a href="#Signup" onClick={handleClick}>
                          Signup
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are Full stack dev</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  setCurrUser: PropTypes.string.isRequired,
  setShow: PropTypes.string.isRequired,
};

export default Login;
