import useAuth from "../../hook/useAuth";
const PrivateRoute = ({ children }) => {
  const data = useAuth();

  console.log(data);
  // if (!user) {
  //   console.log(2);
  //   return <Navigate to="login" />;
  // } else {
  //   return children;
  // }
};
export default PrivateRoute;
