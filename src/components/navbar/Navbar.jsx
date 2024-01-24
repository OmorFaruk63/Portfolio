import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <img src="public\img\mainLogo.jpg" alt="Omor Faruk" />
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
          <li>
            <Link
              to="/"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="project"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="aboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link to="contactMe"
              className="navbar--content"
            >
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="skills"
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
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
