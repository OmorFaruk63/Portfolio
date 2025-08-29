import Link from "next/link";
import React from "react";
import NextImage from "./NextImage";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__top footer__top--style1 bg-color">
          <div className="container">
            <div className="footer__wrapper">
              <div className="row gy-5 gx-4">
                <div className="col-lg-4  col-sm-8">
                  <div className="footer__about">
                    <Link href="/" className="footer__about-logo">
                      <NextImage
                        width={198}
                        height={50}
                        className="dark"
                        src="/images/logo/logo.png"
                        alt="logo"
                      />
                    </Link>
                    <p className="footer__about-moto ">
                      I&nbsp; work with a passion of taking challenges creating
                      new ones in UI/UX Sector.
                    </p>
                    <div className="footer__app">
                      <div className="footer__contact">
                        <ul className="social">
                          <li className="social__item">
                            <Link href="#" className="social__link active">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link href="#" className="social__link  ">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style4"
                            >
                              <i className="fa-brands fa-linkedin-in" />
                            </Link>
                          </li>
                          <li className="social__item">
                            <Link
                              href="#"
                              className="social__link social__link--style4"
                            >
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h5>Service</h5>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/services">Ui/Ux Design</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/services">App Design</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/services">Web Design</Link>{" "}
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/services">Ui/Ux Design</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2  col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h5>Quick Link</h5>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/">Home</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/about">About</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {" "}
                          <Link href="/services">Service</Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4  col-sm-8">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h5>Subscribe newsletter</h5>
                    </div>
                    <div className="footer__links-content">
                      <p>
                        I&nbsp; work with a passion of taking challenges and
                        creating new ones.
                      </p>
                    </div>
                    <div className="footer__subscription">
                      <form className="subscription-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                        />
                        <button
                          type="submit"
                          className="trk-btn trk-btn--primary"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay overlay--top-left" />
          <div className="overlay overlay-blue--bottom-right" />
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className=" mb-0">
                  Copyright © 2025 designed by{" "}
                  <Link
                    href="https://themeforest.net/user/thetork/portfolio"
                    target="_blank"
                  >
                    Thetork
                  </Link>{" "}
                </p>
              </div>
              <div>
                <ul className="footer__terms">
                  <li>
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1">
            <NextImage
              width={34}
              height={34}
              src="/images/footer/1.png"
              alt="shape icon"
            />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
