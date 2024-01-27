import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  if (user) {
    console.log("kkkk");
    return children;
  }

  return <Navigate to="/login" />;
};
