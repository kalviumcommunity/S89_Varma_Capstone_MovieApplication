// components/auth/SignIn.jsx
import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
