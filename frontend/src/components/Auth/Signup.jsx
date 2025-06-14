import React, { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/signup', form);
    alert('Signed up!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
}
