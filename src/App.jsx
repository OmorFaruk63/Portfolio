import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrivateRoute> <Outlet /></PrivateRoute>
      <Footer />
    </div>
  );
}

export default App;
