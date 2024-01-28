import { Link } from "react-router-dom";
import "./profile.css";
import { auth } from "../../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
const Profile = ({ user, setIsTrue }) => {
  const [signOut, loading, error] = useSignOut(auth);
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
        <button onClick={() => signOut()} className="btn btn-outline-primary">
          Log Out
        </button>
      )}
    </div>
  );
};

export default Profile;
