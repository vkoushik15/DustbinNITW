import React, { useState ,useContext} from 'react';
import axios from 'axios';
import '../styling/login.css';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../authContext';
const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate =useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user/login', {
                email,
                password,
            });
           
            login(response.data.token);
            alert('Login successful');
            setEmail('');
            setPassword('');
            navigate('/')
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in');
        }
    };

    return (
        <div className="login-page"> 
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;


