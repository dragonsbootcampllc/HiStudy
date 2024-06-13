import Link from "next/link";
import React from "react";
import { useAuth } from '@/context/AuthContext';
import { signInUser } from '@/API/authentication/signin'
import { signUpUser } from '@/API/authentication/signup'

import LoadingSpinner from '@/components/loading/LoadingSpinner'

import { useState } from "react";

const Login = () => {
  const { login, isAuthenticated, user } = useAuth();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ 
    email: '', 
    firstName: '', 
    lastName: '',
    password: '', 
    cpassword: '', 
    phone: '' 
  });

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await login(loginData);
      console.log('Logged in successfully:', success);
      if (success) {
        setLoginError(null);
        setLoginSuccess(true);
        // setTimeout(() => {
        //   window.location.href = '/';
        // }, 2000);
      } else {
        setLoginError('Incorrect email or password. Please try again.');
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setLoginError('Error logging in. Please check your credentials.');
      setLoginSuccess(false);
    }
    setLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await signUpUser(registerData);
      console.log('Registered successfully:', userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      setSignupSuccess(true);
      setSignupError(null);
    } catch (error) {
      console.error('Error registering:', error.message);
      setSignupError('Error registering. Please try again.');
      setSignupSuccess(false);
    }
    setLoading(false);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  return (
    <>
      {loginError && (
        <div className="error-message" style={{ textAlign: 'center', color: 'red' }}>{loginError}</div>
      )}

      {loginSuccess && (
        <div className="success-message" style={{ textAlign: 'center', color: 'green' }}>Login successful, You Would be redirected to home</div>
      )}

      {signupError && (
        <div className="error-message" style={{ textAlign: 'center', color: 'red' }}>{signupError}</div>
      )}

      {signupSuccess && (
        <div className="success-message" style={{ textAlign: 'center', color: 'green' }}>Signup successful, Consider Conforming Your Email then try to log in</div>
      )}
      
      {loading && <LoadingSpinner size={30} color="#16abff" />}

      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Login</h3>
          <form className="max-width-auto" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="text"
                placeholder="Username or email *"
                onChange={handleLoginChange}
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password *"
                onChange={handleLoginChange}
              />
              <span className="focus-border"></span>
            </div>

            <div className="row mb--30">
              <div className="col-lg-6">
                <div className="rbt-checkbox">
                  <input type="checkbox" id="rememberme" name="rememberme" />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-lost-password text-end">
                  <Link className="rbt-btn-link" href="/reset-password">
                    Lost your password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">
                    {loading ? "Logging in..." : "Login"}
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Register</h3>
          <form className="max-width-auto" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email address *"
                onChange={handleRegisterChange}
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
            <input
              name="firstName"
              type="text"
              placeholder="First Name *"
              onChange={handleRegisterChange}
            />
            <span className="focus-border"></span>
          </div>

          <div className="form-group">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name *"
              onChange={handleRegisterChange}
            />
            <span className="focus-border"></span>
          </div>


            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password *"
                onChange={handleRegisterChange}
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                name="cpassword"
                type="password"
                placeholder="Confirm Password *"
                onChange={handleRegisterChange}
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input
                name="phone"
                type="text"
                placeholder="Phone *"
                onChange={handleRegisterChange}
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">
                    {loading ? "Signing up..." : "Signup"}
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
