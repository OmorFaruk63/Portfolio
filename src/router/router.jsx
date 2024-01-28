import { createBrowserRouter } from "react-router-dom";
import Project from "../Pages/project/Project";
import Skills from "../Pages/skill/Skills";
import ContactMe from "../Pages/contact/ContactMe";
import AboutMe from "../Pages/about/AboutMe";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Signup from "../Pages/sign up/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
      {
        path: "/aboutMe",
        element: <AboutMe />,
      },
    ],
  },
]);
