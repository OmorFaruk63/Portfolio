/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./NavImg.css";
import { auth } from "../../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
const NavImg = ({ user, setIsTrue }) => {
  const [signOut] = useSignOut(auth);
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
      <span>{user?.displayName}</span>
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

export default NavImg;
