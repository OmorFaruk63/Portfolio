import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import { FC } from "react";

export interface ExperienceItem {
  period: string;
  company: string;
  title: string;
  description: string;
  link: string;
  isActive?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    period: "2025 to Present",
    company: "TRK TTT Studios",
    title: "Senior Designer",
    description:
      "As a senior UI/UX designer, I bring over 09 years of experience in crafting experiences.",
    link: "/services/service-details",
  },
  {
    period: "Dec 2018 to 2021",
    company: "Whitecap Canada",
    title: "UI/UX Designer",
    description:
      "I am Ui/Ux dedicated to creating seamless digital at user satisfaction.",
    link: "/services/service-details",
    isActive: true,
  },
  {
    period: "August 2015 to 2018",
    company: "Packetilabs Ltd",
    title: "Web Designer",
    description:
      "I specialize in translating ideas into visually stunning and functional websites.",
    link: "/services/service-details",
  },
  {
    period: "July 2013 to 2015",
    company: "Sagebrush",
    title: "Junior Designer",
    description:
      "I am enthusiastic about learning and honing my skills in the dynamic field of design.",
    link: "/services/service-details",
  },
];

const CaseExperience: FC = () => {
  return (
    <section className="experience experience--style2 padding-bottom padding-top position-relative bg-grid">
      <div className="container">
        <div
          className="experience__header pb-45 d-md-flex align-items-center justify-content-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="section-header pb-0">
            <div className="subtitle">
              <span>
                <NextImage
                  width={33}
                  height={34}
                  src="/images/icon/sparkle.svg"
                  alt="sparkle icon"
                />
              </span>{" "}
              Skill
            </div>
            <h2>
              My <span>Experience</span>
            </h2>
          </div>
          <div className="experience__header-btn">
            <Link href="/contact" className="trk-btn trk-btn--primary">
              Contact Me
            </Link>
          </div>
        </div>

        <div
          className="experience__wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row g-5">
            {experiences.map((exp, index) => (
              <div key={index} className="col-12">
                <div
                  className={`experience__item ${exp.isActive ? "active" : ""}`}
                >
                  <div className="experience__item-period">
                    <p>{exp.period}</p>
                    <h6>{exp.company}</h6>
                    <div className="experience__item-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={33}
                        height={34}
                        viewBox="0 0 33 34"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.5 34C16.467 24.6227 9.09241 17.0315 0 17.0315C9.11269 17.0315 16.5 9.40615 16.5 0C16.5329 9.37729 23.9076 16.9685 33 16.9685C23.8872 16.9685 16.5 24.5939 16.5 34Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`experience__item-inner gradient-border ${
                      exp.isActive ? "active" : ""
                    }`}
                  >
                    <div className="experience__item-wrapper position-relative">
                      <div className="experience__item-content">
                        <div className="experience__item-title">
                          <h4>{exp.title}</h4>
                        </div>
                        <div className="experience__item-description">
                          <p>{exp.description}</p>
                        </div>
                      </div>
                      <Link
                        href={exp.link}
                        className="experience__item-action stretched-link"
                        aria-label="View Service Details"
                      >
                        <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseExperience;
