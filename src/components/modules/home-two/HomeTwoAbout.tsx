import CircleText from "@/components/common/CircleText";
import CustomCountUp from "@/components/common/Countup";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";

const HomeTwoAbout: React.FC = () => {
  return (
    <section className="about about--style2 padding-top padding-bottom">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5 gap-4 gap-lg-0 gy-4 gy-sm-0 align-items-center">
            {/* Left Image */}
            <div className="col-lg-5">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <NextImage
                      width={515}
                      height={539}
                      className="dark"
                      src="/images/about/2.png"
                      alt="about-image"
                    />
                    {/* Floating Content: Awards */}
                    <div
                      className="floating-content__top-left"
                      data-aos="fade-right"
                      data-aos-duration={1000}
                    >
                      <div className="floating-content__item">
                        <h3>
                          <CustomCountUp
                            className="purecounter"
                            start={10}
                            end={68}
                          />
                          +
                        </h3>
                        <p>Awards Achievement</p>
                      </div>
                    </div>
                    {/* Circle Experience */}
                    <div className="circle">
                      <h2>09</h2>
                      <CircleText text="YEARS PROFESSIONAL CODING EXPERIENCE -" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-7">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <div className="section-header section-header--style2 section-header--max50">
                  <div className="subtitle">
                    <span>
                      <NextImage
                        src="/images/icon/shape/blue-asterisk.svg"
                        alt="Asterisk Icon"
                        width={24}
                        height={24}
                      />
                    </span>{" "}
                    About Myself
                  </div>
                  <h2 className="mb-35">
                    Professional &amp; Experience Web<span> Developer</span>
                  </h2>
                  <p>
                    Bridging creativity and technology is at the heart of my the
                    approach to web development. With a passion for innovative
                    design and a knack for cutting .With a passion for
                    technology is at the heart of my the approach to web
                    development innovative solutions
                  </p>
                </div>

                {/* Contact Info */}
                <div className="contact-info align-items-center">
                  <div className="contact-info__btn d-flex">
                    <Link href="/contact" className="trk-btn trk-btn--primary">
                      Let&apos;s Work
                    </Link>
                  </div>
                  <div className="contact-info__item position-relative">
                    <div className="contact-info__item-thumb contact-info__item-thumb--style2">
                      <NextImage
                        width={24}
                        height={24}
                        src="/images/icon/phone-white.svg"
                        alt="phone icon"
                      />
                    </div>
                    <div className="contact-info__item-content">
                      <p>Call Me Now</p>
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
              </div>
            </div>
            {/* End Right Content */}
          </div>
        </div>
      </div>

      {/* Shape & Overlay */}
      <div className="about__shape">
        <span className="about__shape-item about__shape-item--1">
          <NextImage
            width={177}
            height={187}
            src="/images/icon/shape/sixline-asterisk.svg"
            alt="asterisk icon"
          />
        </span>
      </div>
      <div className="overlay overlay--top-left" />
    </section>
  );
};

export default HomeTwoAbout;
