import CustomCountUp from "@/components/common/Countup";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import ContactSectionForm from "../home/ContactSectionForm";

const HomeTwoContactSection = () => {
  return (
    <section className="contact padding-top padding-bottom bg-color">
      <div className="container">
        <div className="contact__wrapper">
          <div className="row g-5">
            {/* LEFT COLUMN */}
            <div className="col-md-6">
              <div className="section-header section-header--style2">
                <div className="subtitle">
                  <span>
                    <NextImage
                      src="/images/icon/shape/blue-asterisk.svg"
                      alt="Asterisk Icon"
                      width={24}
                      height={24}
                    />
                  </span>{" "}
                  News &amp; Articles
                </div>
                <h2 className="mb-25">
                  Let&apos;s <span>Get in Touch</span>
                </h2>
                <p>
                  Whether you have an idea you&apos;d like to bring to life or
                  need assistance with an existing project,
                </p>
              </div>

              <div
                className="contact__counter"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="contact__about-item">
                      <h3>
                        <CustomCountUp start={1} end={6} />
                        k+
                      </h3>
                      <span>Projects Completed</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact__about-item">
                      <h3>
                        <CustomCountUp start={1} end={2} />
                        k+
                      </h3>
                      <span>Client Successful</span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="contact__about-item">
                      <h3>
                        <CustomCountUp start={1} end={12} />+
                      </h3>
                      <span>Years of Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact__social">
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
                      <i className="fab fa-linkedin-in" />
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

            {/* RIGHT COLUMN - FORM */}
            <div className="col-md-6">
              <div
                className="contact__form"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <ContactSectionForm />
              </div>
            </div>
          </div>
        </div>

        {/* SHAPES & OVERLAYS */}
        <div className="contact__shape">
          <span className="contact__shape-item contact__shape-item--1">
            <NextImage
              width={177}
              height={187}
              src="/images/icon/shape/sixline-asterisk.svg"
              alt="asterisk icon"
            />
          </span>
        </div>
        <div className="overlay overlay--bottom-left" />
        <div className="overlay overlay--right-center" />
      </div>
    </section>
  );
};

export default HomeTwoContactSection;
