import { useState } from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const [data, setdata] = useState(user);

  return user;
};

export default useAuth;
