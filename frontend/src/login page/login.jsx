import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                onLogin && onLogin();
            } else {
                setError('Invalid login response.');
            }
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Movie Application</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="login-error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;