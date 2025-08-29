import Link from "next/link";
import React from "react";
import NextImage from "./NextImage";

const FooterTwo = () => {
  return (
    <footer className="footer">
      <div className="footer__top footer__top--style1 bg-color">
        <div className="container">
          <div className="footer__wrapper">
            <div className="row gy-5 gx-4 justify-content-between">
              <div className="col-lg-4  col-sm-8">
                <div className="footer__about">
                  <Link href="/" className="footer__about-logo">
                    <NextImage
                      width={198}
                      height={50}
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
                          <Link
                            href="#"
                            className="social__link active"
                            aria-label="facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href="#"
                            className="social__link"
                            aria-label="instagram"
                          >
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href="#"
                            className="social__link social__link--style4"
                            aria-label="linkedin"
                          >
                            <i className="fa-brands fa-linkedin-in" />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link
                            href="#"
                            className="social__link social__link--style4"
                            aria-label="youtube"
                          >
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-sm-8">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h5>Newsletter</h5>
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
              <div className="col-xl-3 col-lg-4">
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
                            hello@torkfolio.com
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
              <ul className="footer__terms footer__terms--style2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/project">Portfolio</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Service</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
