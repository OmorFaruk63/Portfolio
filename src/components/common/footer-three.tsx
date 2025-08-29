import Link from "next/link";
import React from "react";
import NextImage from "./NextImage";

const FooterThree = () => {
  return (
    <footer className="footer footer--style2">
      <div className="footer__top  bg-color  padding-top padding-bottom">
        <div className="container">
          <div className="footer__wrapper">
            <div className="row gy-5 gx-4 justify-content-between">
              <div className="col-12">
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
                  <div
                    className="footer__contact"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                  >
                    <ul className="social social--style2">
                      <li className="position-relative">
                        <Link
                          className="social__item stretched-link active"
                          href="#"
                        >
                          <span className="social__link">
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                          LinkedIn
                        </Link>
                      </li>
                      <li className="position-relative">
                        <Link className="social__item stretched-link" href="#">
                          <span className="social__link">
                            <i className="fab fa-instagram" />
                          </span>{" "}
                          Instagram
                        </Link>
                      </li>
                      <li className="position-relative">
                        <Link className="social__item stretched-link" href="#">
                          <span className="social__link">
                            <i className="fab fa-facebook-f" />
                          </span>{" "}
                          Facebook
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-sm-8">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h5>Subscribe </h5>
                  </div>
                  <div className="footer__links-content">
                    <p>
                      Hey! Are you tired of missing out on our updates?
                      Subscribe news now and stay in the loop!
                    </p>
                  </div>
                  <div className="footer__subscription mt-30">
                    <form className="subscription-form">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
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
              <div className="col-lg-3  col-sm-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h5>Service</h5>
                  </div>
                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        {" "}
                        <Link href="/services">Marketing Automation</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {" "}
                        <Link href="/services">Social Media Marketing</Link>
                      </li>
                      <li className="footer__linklist-item">
                        {" "}
                        <Link href="/services">Engine Optimization</Link>{" "}
                      </li>
                      <li className="footer__linklist-item">
                        {" "}
                        <Link href="/services">Email Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4  col-sm-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h5>Let&apos;s Talk</h5>
                  </div>
                  <div className="contact-info gap-4">
                    <div className="contact-info__item position-relative">
                      <div className="contact-info__item-thumb">
                        <NextImage
                          width={25}
                          height={25}
                          src="/images/icon/phone.svg"
                          alt="phone icon"
                        />
                      </div>
                      <div className="contact-info__item-content">
                        <p>Call Us Now</p>
                        <h6>
                          <Link
                            href="tel:+77022444055"
                            className="text-inherit stretched-link"
                          >
                            +77 022 444 05 05
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="contact-info__item position-relative mt-25">
                      <div className="contact-info__item-thumb">
                        <NextImage
                          width={25}
                          height={25}
                          src="/images/icon/email.svg"
                          alt="email icon"
                        />
                      </div>
                      <div className="contact-info__item-content">
                        <p>Email</p>
                        <h6>
                          <Link
                            href="mailto:hello@torkfolio.com"
                            className="text-inherit stretched-link"
                          >
                            torkfolio@example
                          </Link>
                        </h6>
                      </div>
                    </div>
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
            <div className="footer__end-copyright  mx-auto">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
