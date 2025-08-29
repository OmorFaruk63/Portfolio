import CircleText from "@/components/common/CircleText";
import CustomCountUp from "@/components/common/Countup";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import HomeTwoBannerVideoBtn from "./HomeTwoBannerVideoBtn";

const HomeTwoBanner: React.FC = () => {
  return (
    <>
      <section className="banner banner--style2 bg-grid">
        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-7">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                >
                  <div className="banner__content-shape banner__content-shape--style3">
                    <NextImage
                      width={66}
                      height={47}
                      src="/images/icon/sparkle-highlight.svg"
                      alt="Loop arrow image"
                    />
                  </div>
                  <div className="banner__content-subtitle banner__content-subtitle--style2">
                    <p>👋 Hello, There!</p>
                  </div>
                  <h1 className="banner__content-heading">
                    Joshua Gilbert Creative <span>Web</span> Developer
                  </h1>
                  <Link
                    href="/contact"
                    className="trk-btn trk-btn--primary mt-4 mt-xl-5"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <NextImage
                    width={650}
                    height={594}
                    src="/images/banner/home2/1.png"
                    alt="banner-thumb"
                    className="dark"
                  />
                </div>
                <div className="banner__client">
                  <div className="banner__client-thumb">
                    <NextImage
                      width={52}
                      height={52}
                      src="/images/banner/home2/client/1.png"
                      alt="client image"
                    />
                    <NextImage
                      width={52}
                      height={52}
                      src="/images/banner/home2/client/2.png"
                      alt="client image"
                    />
                    <NextImage
                      width={52}
                      height={52}
                      src="/images/banner/home2/client/3.png"
                      alt="client image"
                    />
                  </div>
                  <div className="banner__client-content">
                    <h4>
                      <CustomCountUp start={1} end={5} />
                      M+
                    </h4>
                    <span>Trusted Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle">
          <HomeTwoBannerVideoBtn />
          <CircleText text="PLAY INTRO VIDEO - PLAY INTRO VIDEO -" />
        </div>
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <NextImage
              width={147}
              height={103}
              src="/images/icon/top-arrow.svg"
              alt="shape icon"
            />
          </span>
          <span className="banner__shape-item banner__shape-item--2">
            <NextImage
              width={64}
              height={64}
              src="/images/icon/shape/diamond-star2.svg"
              alt="diamond star icon"
            />
          </span>
        </div>
        <div className="overlay overlay--left-center" />
        <div className="overlay overlay--top-right" />
      </section>
    </>
  );
};

export default HomeTwoBanner;
