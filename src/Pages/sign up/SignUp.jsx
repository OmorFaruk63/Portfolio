
import { Link } from 'react-router-dom';
import "./signUp.css";
import { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Implement signup logic here
            console.log('Signup successful');
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button className='btn-outline-primary signup-btn' type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
