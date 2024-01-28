import { Link, Navigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import "./login.css";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [loading, setloading] = useState(false);
  const onSubmit = async (data) => {
    setloading(true);
    await signInWithEmailAndPassword(data.email, data.password);
    setloading(false);
  };

  const handleGithubLogin = async () => {
    setloading(true);
    await signInWithGithub();
    setloading(false);
  };

  const handleGoogleLogin = async () => {
    setloading(true);
    await signInWithGoogle();
    setloading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <span>email : abc@gmail.com </span> <br />
      <span>password : 12345678 </span>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
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
