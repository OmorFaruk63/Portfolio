import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>

      {!navActive && <div className="nav-logo">
        <img src="./img/mainLogo.jpg" alt="Omor Faruk" />
      </div>}

      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul onClick={() => setNavActive(false)}>
          <NavLink
            to="/"
            className="navbar--content"
          >
            <li>
              Home
            </li>
          </NavLink>

          <NavLink to="skills"
            className="navbar--content"
          >
            <li>
              Skills
            </li>
          </NavLink>

          <NavLink to="project"
            className="navbar--content"
          >
            <li>
              Projects
            </li>
          </NavLink>

          <NavLink to="aboutMe"
            className="navbar--content"
          >
            <li>
              About Me
            </li>
          </NavLink>

          <NavLink to="contactMe"
            className="navbar--content"
          >
            <li>
              Contact Me
            </li>
          </NavLink>



        </ul>
      </div>

      {!navActive && <Link to="login"
        className="btn btn-outline-primary"
      >
        Login
      </Link>}

    </nav>
  );
}

export default Navbar;
