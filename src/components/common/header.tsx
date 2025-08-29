"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NextImage from "./NextImage";
const menuItems = [
  {
    label: "Home",

    submenu: [
      { label: "Home One", href: "/" },
      { label: "Home Two", href: "/home-two" },
      { label: "Home Three", href: "/home-three" },
    ],
  },
  { label: "About Me", href: "/about" },
  {
    label: "Services",
    submenu: [
      { label: "Services", href: "/services" },
      { label: "Services Details", href: "/services/service-details" },
    ],
  },
  {
    label: "Pages",
    submenu: [
      { label: "Project", href: "/project" },
      { label: "Project Details", href: "/project/project-details" },
      { label: "Blogs", href: "/blogs" },
      { label: "Blog Details", href: "/blogs/blog-details" },
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Reset Password", href: "/reset-password" },
      { label: "404 Error", href: "/notfound" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];
const Header: React.FC<{ headerClass?: string }> = ({
  headerClass = "style1",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState<number[]>([]);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const headerRef = useRef<HTMLElement | null>(null);

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 200) {
          headerRef.current.classList.add("header-fixed", "fadeInUp");
        } else {
          headerRef.current.classList.remove("header-fixed", "fadeInUp");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track window width for SSR safety
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Toggle submenu on mobile
  const handleSubmenuClick = (index: number) => {
    if (typeof windowWidth !== "undefined" && windowWidth < 1200) {
      setActiveMenus((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <header
      className={`header-section header-section--${headerClass}`}
      ref={headerRef}
    >
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link href="/">
              <NextImage
                width={198}
                height={50}
                className="dark"
                src="/images/logo/logo.png"
                alt="logo"
                priority
              />
            </Link>
          </div>

          <div className={`menu-area`}>
            <ul className={`menu menu--style1 ${menuOpen ? "active" : ""}`}>
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className={item.submenu ? "menu-item-has-children" : ""}
                >
                  <Link
                    href={item.href || "#"}
                    onClick={() => item.submenu && handleSubmenuClick(i)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ul
                      className="submenu"
                      style={{
                        display:
                          typeof windowWidth !== "undefined" &&
                          windowWidth < 1200 &&
                          activeMenus.includes(i)
                            ? "block"
                            : "",
                      }}
                    >
                      {item.submenu.map((subItem, j) => (
                        <li key={j}>
                          <Link href={subItem.href}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="header-action">
            <div className="menu-area">
              <div className="header-btn">
                <Link href="/register" className="trk-btn trk-btn--outline">
                  <span>Hire Me</span>
                </Link>
              </div>
              <div
                className={`header-bar d-lg-none header-bar--style1 ${
                  menuOpen ? "active" : ""
                }`}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
