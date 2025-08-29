import NextImage from "@/components/common/NextImage";
import Link from "next/link";

const HomeThreeBanner = () => {
  return (
    <section className="banner banner--style3 bg-grid">
      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4 flex-lg-row-reverse align-items-center">
            {/* Left Column: Content */}
            <div className="col-xl-6 col-lg-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="banner__content-shape">
                  <NextImage
                    width={97}
                    height={60}
                    src="/images/icon/sparkle-highlight2.svg"
                    alt="sparkle image"
                  />
                </div>
                <div className="banner__content-subtitle">
                  <p>
                    <span>
                      <NextImage
                        width={27}
                        height={18}
                        src="/images/icon/rectangle.svg"
                        alt="rectangle shape"
                      />
                    </span>{" "}
                    Hi 👋 I&apos;m
                  </p>
                </div>
                <h1 className="banner__content-heading">
                  Mike Digital Marketar&nbsp;Excellence
                </h1>
                <p className="banner__content-moto">
                  As a digital marketer, my role is to leverage online channels
                  and strategies to promote products, services, optimization and
                  brands to targeted audiences.
                </p>
                <div className="banner__btn-group banner__btn-group--style2 btn-group">
                  <Link className="trk-btn trk-btn--primary" href="/contact">
                    Let’s Talk
                  </Link>
                  <a
                    className="trk-btn trk-btn--outline"
                    href="/images/about/cv.pdf"
                    download
                  >
                    Download CV{" "}
                    <span>
                      <i className="fa-solid fa-download" />
                    </span>
                  </a>
                </div>
                <div className="banner__social">
                  <ul className="social social--style2">
                    <li>
                      <Link className="social__item active" href="#">
                        <span className="social__link">
                          <i className="fa-brands fa-linkedin-in" />
                        </span>
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link className="social__item" href="#">
                        <span className="social__link">
                          <i className="fab fa-instagram" />
                        </span>
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link className="social__item" href="#">
                        <span className="social__link">
                          <i className="fab fa-facebook-f" />
                        </span>
                        Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="col-xxl-5 col-xl-6 col-lg-5">
              <div
                className="banner__thumb"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <NextImage
                  width={493}
                  height={735}
                  src="/images/banner/home3/1.png"
                  alt="banner-thumb"
                  className="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--1">
          <NextImage
            width={56}
            height={56}
            src="/images/banner/home3/marketing-icon.svg"
            alt="asterisk icon"
          />
        </span>
        <span className="banner__shape-item banner__shape-item--2">
          <NextImage
            width={87}
            height={87}
            src="/images/banner/home3/mike-blue-icon.svg"
            alt="asterisk icon"
          />
        </span>
        <span className="banner__shape-item banner__shape-item--3">
          <NextImage
            width={147}
            height={148}
            src="/images/banner/home3/mike-green-icon.svg"
            alt="asterisk icon"
          />
        </span>
      </div>

      {/* Overlays */}
      <div className="overlay overlay--bottom-left" />
      <div className="overlay overlay--left-center" />
    </section>
  );
};

export default HomeThreeBanner;
