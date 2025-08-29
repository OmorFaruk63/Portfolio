import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import { FC } from "react";

const PricingSection: FC = () => {
  return (
    <section className="pricing padding-top padding-bottom bg-grid">
      <div
        className="section-header text-center mb-lg-3"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="subtitle">
          <span>
            <NextImage
              width={33}
              height={34}
              src="/images/icon/sparkle.svg"
              alt="sparkle icon"
            />
          </span>{" "}
          Best Pricing
        </div>
        <h2>
          My Pricing <span>Plan</span>
        </h2>
      </div>

      <div className="container">
        <div className="pricing__wrapper">
          <div className="row g-4 align-items-center justify-content-center">
            {/* Plan 1 */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="pricing__item-inner gradient-border">
                  <div className="pricing__item-content">
                    <div className="pricing__item-top">
                      <h6 className="mb-15">Hourly Basis</h6>
                      <h3 className="mb-25">
                        $20<span>/Hourly</span>
                      </h3>
                      <div className="pricing__item-btn">
                        <Link
                          href="/register"
                          className="trk-btn trk-btn--outline text-center w-100"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="pricing__list">
                      <ul>
                        {[
                          " UI UX Design",
                          " Design Customization",
                          " Design with Figma",
                          " Multipage Design",
                          " Support 6 months",
                        ].map((item, i) => (
                          <li className="pricing__list-item" key={i}>
                            <span>
                              <NextImage
                                width={24}
                                height={24}
                                src="/images/icon/border-arrow.svg"
                                alt="border arrow"
                              />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan 2 - Best Value */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="pricing__item-inner gradient-border active">
                  <div className="pricing__item-content">
                    <div className="pricing__item-top">
                      <h6 className="mb-15">Full Time</h6>
                      <h3 className="mb-25">
                        $3,000<span>/Monthly</span>
                      </h3>
                      <div className="pricing__item-btn">
                        <Link
                          href="/register"
                          className="trk-btn trk-btn--outline active text-center w-100"
                        >
                          Get Started
                        </Link>
                      </div>
                      <div className="pricing__item-badge">
                        <span>Best Value</span>
                      </div>
                    </div>
                    <div className="pricing__list">
                      <ul>
                        {[
                          " UI UX Design",
                          " Design Customization",
                          " Design with Figma",
                          " Multipage Design",
                          " Support 6 months",
                        ].map((item, i) => (
                          <li className="pricing__list-item" key={i}>
                            <span>
                              <NextImage
                                width={24}
                                height={24}
                                src="/images/icon/border-arrow.svg"
                                alt="border arrow"
                              />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="col-md-6 col-lg-4">
              <div
                className="pricing__item"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="pricing__item-inner gradient-border">
                  <div className="pricing__item-content">
                    <div className="pricing__item-top">
                      <h6 className="mb-15">Part Time</h6>
                      <h3 className="mb-25">
                        $1,000<span>/Monthly (Minimum)</span>
                      </h3>
                      <div className="pricing__item-btn">
                        <Link
                          href="/register"
                          className="trk-btn trk-btn--outline text-center w-100"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                    <div className="pricing__list">
                      <ul>
                        {[
                          " UI UX Design",
                          " Design Customization",
                          " Design with Figma",
                          " Multipage Design",
                          " Support 6 months",
                        ].map((item, i) => (
                          <li className="pricing__list-item" key={i}>
                            <span>
                              <NextImage
                                width={24}
                                height={24}
                                src="/images/icon/border-arrow.svg"
                                alt="border arrow"
                              />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overlay overlay--top-center" />
      <div className="overlay overlay--bottom-right" />
    </section>
  );
};

export default PricingSection;
