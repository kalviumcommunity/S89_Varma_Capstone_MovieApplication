// components/auth/SignUp.jsx
import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
