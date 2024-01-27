import { Link, NavLink, Navigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./login.css";
import { useState } from "react";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Implement login logic here
      console.log("Login successful");
    } else {
      console.log("Form validation failed");
    }
  };

  const handleGithubLogin = () => {
    signInWithGithub();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button className="btn-outline-primary login-btn" type="submit">
          Login
        </button>
      </form>
      <div className="oauth-buttons">
        <button className="google" onClick={handleGoogleLogin}>
          <FaGoogle /> Sign in with Google
        </button>
        <button className="github" onClick={handleGithubLogin}>
          <FaGithub /> Sign in with GitHub
        </button>
      </div>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
