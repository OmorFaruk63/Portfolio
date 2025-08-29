import NextImage from "@/components/common/NextImage";
import Link from "next/link";

const HomeThreeServices = () => {
  return (
    <section className="services3 padding-top padding-bottom">
      <div className="container">
        <div
          className="services3__header d-flex flex-wrap align-items-center gap-4 justify-content-between mb-45"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="section-header pb-0">
            <div className="subtitle">
              <span className="me-1">
                <NextImage
                  width={27}
                  height={18}
                  src="/images/icon/rectangle.svg"
                  alt="rectangle shape"
                />
              </span>{" "}
              Service
            </div>
            <h2 className="mb-0">Full Creative Services</h2>
          </div>
          <div className="services3__header-btn">
            <Link href="/services" className="trk-btn trk-btn--primary">
              All Services
            </Link>
          </div>
        </div>

        <div className="services3__wrapper">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="services3__item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="services3__item-inner gradient-border">
                  <div className="services3__item-wrapper">
                    <div className="services3__item-thumb">
                      <i className="fa-solid fa-chart-simple" />
                    </div>
                    <div className="services3__item-content">
                      <h4>Marketing Automation</h4>
                      <p>
                        Implementing software and workflows to automate
                        repetitive marketing.
                      </p>
                      <Link
                        href="/services/service-details"
                        className="text-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="services3__item"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="services3__item-inner gradient-border active">
                  <div className="services3__item-wrapper">
                    <div className="services3__item-thumb">
                      <i className="fa-solid fa-globe" />
                    </div>
                    <div className="services3__item-content">
                      <h4>Website Full SEO</h4>
                      <p>
                        Implementing software and workflows to automate
                        repetitive marketing.
                      </p>
                      <Link
                        href="/services/service-details"
                        className="text-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="services3__item"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <div className="services3__item-inner gradient-border">
                  <div className="services3__item-wrapper">
                    <div className="services3__item-thumb">
                      <i className="fa-solid fa-bolt-lightning" />
                    </div>
                    <div className="services3__item-content">
                      <h4>Speed optimization</h4>
                      <p>
                        Implementing software and workflows to automate
                        repetitive marketing.
                      </p>
                      <Link
                        href="/services/service-details"
                        className="text-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeServices;
