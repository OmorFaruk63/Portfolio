import CustomCountUp from "@/components/common/Countup";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section className="about about--style1 padding-top padding-bottom">
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-4  align-items-center">
            <div className="col-lg-5">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <NextImage
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                      width={470}
                      height={571}
                    />
                    <div
                      className="floating-content__bottom-left"
                      data-aos="fade-right"
                      data-aos-duration={1000}
                    >
                      <div className="floating-content__item">
                        <h3>
                          <CustomCountUp
                            className="purecounter"
                            start={1920}
                            end={2000}
                          />
                          +
                        </h3>
                        <p>Clients all Over the World</p>
                      </div>
                    </div>
                    <div
                      className="floating-content__top-right"
                      data-aos="fade-right"
                      data-aos-duration={1000}
                    >
                      <div className="floating-content__item">
                        <h3>
                          {" "}
                          <CustomCountUp
                            className="purecounter"
                            start={40}
                            end={98}
                          />
                          %
                        </h3>
                        <p>Satisfied Customers !</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="about__content gradient-border active"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="section-header">
                  <div className="subtitle">
                    <span>
                      <NextImage
                        width={33}
                        height={34}
                        src="/images/icon/sparkle.svg"
                        alt="sparkle icon"
                      />
                    </span>{" "}
                    About Me
                  </div>
                  <h2>
                    <span>UI/UX</span> Design Process
                  </h2>
                  <p className="mb-0">
                    I am a UI/UX designer, and I’m very passionate and dedicated
                    to my work. With 09 years experience as a professional.
                  </p>
                </div>
                <div className="contact-info d-flex flex-wrap gap-4">
                  <div className="contact-info__item position-relative">
                    <div className="contact-info__item-thumb">
                      <NextImage
                        width={25}
                        height={25}
                        src="/images/icon/email.svg"
                        alt="email icon"
                      />
                    </div>
                    <div className="contact-info__item-content ">
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
                      <p>Phone</p>
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
                </div>
                <div className="btn-group mt-65">
                  <Link href="/contact" className="trk-btn trk-btn--primary">
                    Let&apos;s Work
                  </Link>
                  <a
                    className="trk-btn trk-btn--outline"
                    href="/images/about/cv.pdf"
                    download=""
                  >
                    Download CV{" "}
                    <span>
                      <i className="fa-solid fa-download" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__shape">
        <span className="about__shape-item about__shape-item--1">
          <NextImage
            width={25}
            height={25}
            src="/images/icon/shape/diamond-star2.svg"
            alt="shape icon"
          />
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
