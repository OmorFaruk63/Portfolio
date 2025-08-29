import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";
import ContactSectionForm from "./ContactSectionForm";

const ContactSection: React.FC = () => {
  return (
    <section className="contact padding-top padding-bottom bg-grid">
      <div className="container">
        <div className="contact__wrapper">
          <div className="row g-5">
            {/* Left Side - Contact Info */}
            <div className="col-md-6">
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
                  Contact Me
                </div>
                <h2>
                  Let&apos;s <span>Talk</span>
                </h2>
                <p className="mb-0">
                  Building the blueprint for success is a crucial step in any
                  project. It involves meticulously planning.
                </p>
              </div>

              <div
                className="contact__info"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="contact__details">
                  <div
                    className="contact__item-whatsapp"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                  >
                    <Link href="tel:+934714523" className="text-inherit">
                      <span>
                        <NextImage
                          width={48}
                          height={48}
                          src="/images/icon/whatsapp.svg"
                          alt="whatsapp icon"
                        />
                      </span>{" "}
                      (+089) 934 71 45 23
                    </Link>
                  </div>
                </div>

                <div className="contact__social mt-55">
                  <h5 className="mb-25">Follow Me</h5>
                  <ul className="social">
                    <li className="social__item">
                      <Link href="#" className="social__link active">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link href="#" className="social__link">
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

            {/* Right Side - Contact Form */}
            <div className="col-md-6">
              <div className="contact__form bg-color gradient-border active">
                <ContactSectionForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="contact__shape">
        <span className="contact__shape-item contact__shape-item--1">
          <NextImage
            width={177}
            height={187}
            src="/images/icon/shape/sixline-asterisk.svg"
            alt="asterisk icon"
          />
        </span>
        <span className="contact__shape-item contact__shape-item--2">
          <NextImage
            width={372}
            height={158}
            src="/images/icon/shape/lefttorightarrow-lg.svg"
            alt="left to right icon"
          />
        </span>
      </div>

      {/* Overlays */}
      <div className="overlay overlay--bottom-left" />
      <div className="overlay overlay--right-center" />
    </section>
  );
};

export default ContactSection;
