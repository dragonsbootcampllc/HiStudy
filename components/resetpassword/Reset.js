import Link from "next/link";
import React, { useState } from "react";

import { forgetPassword } from '@/API/authentication/resetpass'
import { sendCodeToEmail } from '@/API/authentication/access'

import LoadingSpinner from '@/components/loading/LoadingSpinner'

const ResetPassword = () => {

  const [resetData, setResetData] = useState({ email: '', password: '', code: '' });
  const [sendingtData, setSendingtData] = useState({ email: '' });

  const [codeSuccess, setCodeSuccess] = useState(false);
  const [codeError, setCodeError] = useState(null);

  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await forgetPassword(resetData);
      console.log('Reseted successfully:', userData);
      setResetSuccess(true);
      setResetError(null);
    } catch (error) {
      console.error('Error reseting in:', error.message);
      setResetError('Error occured. Please try again later.');
      setResetSuccess(false);
      setCodeSuccess(false);
    }
    setLoading(false);
  };

  const handleResetChange = (e) => {
    const { name, value } = e.target;
    setResetData({ ...resetData, [name]: value });
  };

  const handlesendingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userData = await sendCodeToEmail(sendingtData);
      console.log('Sended successfully:', userData);
      setCodeSuccess(true);
      setCodeError(null);
    } catch (error) {
      console.error('Error sending code:', error.message);
      setCodeError('Error occured. Please try again later.');
      setResetSuccess(false);
      setCodeSuccess(false);
    }
    setLoading(false);
  };

  const handleSendingChange = (e) => {
    const { name, value } = e.target;
    setSendingtData({ ...sendingtData, [name]: value });
  };

  return (
    <>
      {resetError && (
        <div className="error-message" style={{ textAlign: 'center', color: 'red' }}>{resetError}</div>
      )}

      {resetSuccess && (
        <div className="success-message" style={{ textAlign: 'center', color: 'green' }}>Login successful, You Would be redirected to home</div>
      )}

      {codeError && (
        <div className="error-message" style={{ textAlign: 'center', color: 'red' }}>{codeError}</div>
      )}

      {codeSuccess && (
        <div className="success-message" style={{ textAlign: 'center', color: 'green' }}>Signup successful, Consider Conforming Your Email then try to log in</div>
      )}
      
      {loading && <LoadingSpinner size={30} color="#16abff" />}
      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Get Code</h3>
          <form className="max-width-auto" onSubmit={handlesendingSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="text"
                placeholder="Email *"
                onChange={handleSendingChange}
              />
              <span className="focus-border"></span>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Send Email</span>
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
          <h3 className="title">Reset Password</h3>
          <form className="max-width-auto" onSubmit={handleResetSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                onChange={handleResetChange}
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input
                name="code"
                type="text"
                placeholder="Code *"
                onChange={handleResetChange}
              />
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password *"
                onChange={handleResetChange}
              />
              <span className="focus-border"></span>
            </div>
            
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Reset Password</span>
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

export default ResetPassword;
