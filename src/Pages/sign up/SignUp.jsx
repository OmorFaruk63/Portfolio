import { Link, Navigate, useNavigate } from "react-router-dom";
import "./signUp.css";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignOut,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/loading/Loading";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [authUser] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data) => {
    setloading(true);
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
      toast.success("Registration successful", { toastId: "omor" });
      const success = await signOut();
      if (success) {
        navigate("/login");
      }
    } catch (error) {
      setError("email", { type: "manual", message: error.message });
      toast.error(error.message, { toastId: "omor" });
    }

    setloading(false);
  };

  if (authUser && !loading) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            <button className="btn-outline-primary signup-btn" type="submit">
              Sign Up
            </button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default Signup;
