import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', form);
      alert('Login successful');
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default SignIn;
