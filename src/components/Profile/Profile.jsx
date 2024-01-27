import { Link } from "react-router-dom";
import "./profile.css";
const Profile = ({ user, setIsTrue }) => {
  return (
    <div onClick={() => setIsTrue((prev) => !prev)} className="profile-box">
      <img
        src={
          user?.photoURL
            ? user?.photoURL
            : "https://www.carolroth.com/unsolicited-business-advice/wp-content/plugins/clb-final/images/default-image.jpg"
        }
        alt="profile image"
      />

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
