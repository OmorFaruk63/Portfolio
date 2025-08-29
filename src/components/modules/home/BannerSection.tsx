import NextImage from "@/components/common/NextImage";
import BannerSectionBtn from "./BannerSectionBtn";

const BannerSection: React.FC = () => {
  return (
    <>
      <section className="banner banner--style1 bg-grid">
        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                >
                  <div className="banner__content-shape">
                    <NextImage
                      width={25}
                      height={25}
                      src="/images/icon/shape/loop-arrow.svg"
                      alt="Loop arrow image"
                    />
                  </div>
                  <div className="banner__content-subtitle">
                    <p>Hey Hi! 👋</p>
                  </div>
                  <h1 className="banner__content-heading">
                    I&apos;m Oliver Noah <br />
                    <NextImage
                      width={64}
                      height={64}
                      src="/images/icon/shape/diamond-star.svg"
                      alt="diamond-star shape"
                    />
                    <span> UI/UX </span>Designer
                  </h1>
                  <p className="banner__content-moto">
                    A blend of creativity, empathy, and technical expertise, I
                    strive to design interfaces that not only look users at
                    every interaction.
                  </p>
                  <div className="banner__btn-group btn-group">
                    <a
                      className="trk-btn trk-btn--primary"
                      href="/images/about/cv.pdf"
                      download
                    >
                      Download CV{" "}
                      <span>
                        <i className="fa-solid fa-download" />
                      </span>
                    </a>
                    <BannerSectionBtn />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <NextImage
                    src="/images/banner/home1/1.png"
                    alt="banner-thumb"
                    className="dark"
                    width={567}
                    height={676}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <NextImage
              width={64}
              height={64}
              src="/images/icon/shape/diamond-star.svg"
              alt="diamond-star shape"
            />
          </span>
          <span className="banner__shape-item banner__shape-item--2">
            <NextImage
              width={177}
              height={187}
              src="/images/icon/shape/sixline-asterisk.svg"
              alt="shape icon"
            />
          </span>
          <span className="banner__shape-item banner__shape-item--3">
            <NextImage
              width={64}
              height={64}
              src="/images/icon/shape/diamond-star2.svg"
              alt="shape icon"
            />
          </span>
        </div>

        {/* Overlay */}
        <div className="overlay overlay--bottom-left" />
      </section>
    </>
  );
};

export default BannerSection;
