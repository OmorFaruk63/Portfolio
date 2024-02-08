import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AnimatedCursor
        style={{ zIndex: 1100 }}
        color="2, 151, 214"
        innerSize={15}
        outerSize={10}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
