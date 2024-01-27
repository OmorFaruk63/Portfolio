import { Link } from "react-router-dom";
import "./profile.css";
const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src="" alt="" />

      {!user ? (
        <Link to="login" className="btn btn-outline-primary">
          Login
        </Link>
      ) : (
        <Link to="login" className="btn btn-outline-primary">
          Log Out
        </Link>
      )}
    </div>
  );
};

export default Profile;
