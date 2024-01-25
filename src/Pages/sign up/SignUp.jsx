
import { Link } from 'react-router-dom';
import "./signUp.css";
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [createUserWithEmailAndPassword, u, l, err] = useCreateUserWithEmailAndPassword(auth);

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!password.trim() && password.length >= 8) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await createUserWithEmailAndPassword(email, password);
            } catch (error) {
                console.error('Error creating user:', error);
                console.error(err);
            }
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <>
            {l ? <h1>Loading...</h1> : <div className="signup-container">
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
                        />
                        {errors.name ? <p className="error">{errors.name}</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors?.email ? <p className="error">{errors.email}</p> : ""}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors?.password ? <p className="error">{errors.password}</p> : ""}
                    </div>
                    <button className='btn-outline-primary signup-btn' type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>}
        </>
    );
};

export default Signup;
