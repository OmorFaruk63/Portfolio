import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience padding-top padding-bottom">
      <div className="container">
        <div className="experience__wrapper padding-bottom">
          <div className="row g-5">
            <div className="col-lg-6">
              <div
                className="experience__content"
                data-aos="fade-right"
                data-aos-duration={1000}
              >
                <div className="section-header section-header--style2 section-header--max20">
                  <div className="subtitle">
                    <span>
                      <NextImage
                        width={24}
                        height={24}
                        src="/images/icon/shape/blue-asterisk.svg"
                        alt="Asterisk Icon"
                      />
                    </span>{" "}
                    Professional Work{" "}
                  </div>
                  <h2 className="mb-40">
                    Detailed Work History <span>and Skills </span>Overview
                  </h2>
                  <p>
                    As an experienced and skilled developer, I bring a wealth of
                    expertise and technical knowledge to every project. My
                    diverse background spans multiple technologies and industry
                    sectors.
                  </p>
                  <p>
                    I&apos;m passionate about creating efficient, scalable
                    solutions that drive business success and user satisfaction.
                  </p>{" "}
                </div>
                <div className="experience__btn">
                  <Link href="/project" className="trk-btn trk-btn--primary">
                    View Work
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="experience__item mb-25"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                <div className="experience__item-inner gradient-border ">
                  <div className="experience__item-wrapper position-relative">
                    <div className="experience__item-content">
                      <p>
                        <span>
                          <i className="fa-regular fa-calendar-days" />
                        </span>
                        2025 - Present
                      </p>
                      <h4>Senior Developer - Clutch</h4>
                    </div>
                    <Link
                      href="/about"
                      className="experience__item-action stretched-link"
                      aria-label="View Service Details"
                    >
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="experience__item active mb-25 "
                data-aos="fade-up"
                data-aos-duration={8000}
              >
                <div className="experience__item-inner gradient-border active position-relative">
                  <div className="experience__item-wrapper">
                    <div className="experience__item-content">
                      <p>
                        <span>
                          <i className="fa-regular fa-calendar-days" />
                        </span>{" "}
                        2018 - 2022
                      </p>
                      <h4>Front-End Developer - Wipro</h4>
                    </div>
                    <Link
                      href="/about"
                      className="experience__item-action stretched-link"
                      aria-label="View Service Details"
                    >
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="experience__item"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="experience__item-inner gradient-border position-relative">
                  <div className="experience__item-wrapper">
                    <div className="experience__item-content">
                      <p>
                        <span>
                          <i className="fa-regular fa-calendar-days" />
                        </span>{" "}
                        2012 - 2018
                      </p>
                      <h4>Front-End Developer - Wipro</h4>
                    </div>
                    <Link
                      href="/about"
                      className="experience__item-action stretched-link"
                      aria-label="View Service Details"
                    >
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="experience__tools"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          {[
            {
              src: "/images/experience/tools/1.png",
              alt: "VS Code",
              title: "VS Code",
            },
            {
              src: "/images/experience/tools/2.png",
              alt: "Wordpress",
              title: "Wordpress",
            },
            {
              src: "/images/experience/tools/3.png",
              alt: "HTML",
              title: "HTML",
            },
            { src: "/images/experience/tools/4.png", alt: "CSS", title: "CSS" },
            {
              src: "/images/experience/tools/5.png",
              alt: "VUE JS",
              title: "VUE JS",
            },
            {
              src: "/images/experience/tools/6.png",
              alt: "JavaScript",
              title: "JavaScript",
            },
          ].map(({ src, alt, title }, i) => (
            <div key={i} className="experience__tools-item ">
              <NextImage width={48} height={48} src={src} alt={alt} />
              <h6>{title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
