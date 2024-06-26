import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthPages.css';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/forget-password', { email });
      if (response.status === 200) {
        navigate('/forget-password-verify', { state: { email } });
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="auth-page">
      <div className="forget-password-page">
        <h2>Forget Password</h2>
        <p>Enter your email address to receive a verification code.</p>
        <form onSubmit={handleForgetPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit">Send Verification Code</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
