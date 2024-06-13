import React, { useState } from 'react';
import { GiConfirmed } from "react-icons/gi";
import { TbFaceIdError } from "react-icons/tb";
import LoadingSpinner from '@/components/loading/LoadingSpinner'

const EmailConfirmation = () => {
    const [confirmSuccess, setConfirmSuccess] = useState(false);
    const [confirmError, setConfirmError] = useState(null);
    const [defaultState, setDefaultState] = useState(true);
    
    return (
      <>
        {confirmSuccess && (
          <div className="main" style={{textAlign: 'center'}}> 
            <div className="confirmation-header">
            <h2>Email Confirmed Successfully! <GiConfirmed /></h2>
            </div>
            <div className="confirmation-content">
            <p>
                Thank you for confirming your email address. You are now verified to our plateform. <GiConfirmed />
            </p>
            </div>
          </div>      
        )}
        {defaultState && (
            <LoadingSpinner size={50} color="#16abff" />
        )}
        {confirmError && (
          <div className="main" style={{textAlign: 'center'}}> 
            <div className="confirmation-header">
            <h2>Error Occured While Confirmation process! <TbFaceIdError /></h2>
            </div>
            <div className="confirmation-content">
            <p>
                Try again later or check your signup data. <TbFaceIdError />
            </p>
            </div>
          </div>      
        )}
      </>
    );
  };

export default EmailConfirmation;
