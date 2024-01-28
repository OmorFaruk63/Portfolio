import { useAuthState } from "react-firebase-hooks/auth";
import HeroSection from "../../components/heroSection/HeroSection";
import { auth } from "../../firebase/firebase";
import Loading from "../../components/loading/Loading";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="login" />;
  }

  return (
    <>
      <HeroSection />
    </>
  );
}
