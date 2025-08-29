import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import AccordionList from "./AccordionList";

const serviceCards = [
  {
    id: "faq1",
    title: "Visual Design",
    content:
      "Transform your ideas into stunning visual experiences with our expert design services.",
  },
  {
    id: "faq2",
    title: "Web Design",
    content:
      "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
  },
  {
    id: "faq3",
    title: "Mobile App Design",
    content:
      "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
  },
  {
    id: "faq4",
    title: "UI/UX Design",
    content:
      "Elevate your mobile experience. Our mobile app designs combine sleek with intuitive functionality.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services padding-top padding-bottom bg-grid">
      <div className="container">
        <div
          className="services__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="sevice__content">
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
                    Service
                  </div>
                  <h2>
                    Exceptional UI/UX <span> Services </span>
                  </h2>
                  <p>
                    Experience excellence with our UI/UX services. From user
                    research to seamless design implementation, we in crafting
                    innovative solutions experiences and drive engagement for
                    the users of business and services.
                  </p>
                </div>
                <Link href="/contact" className="trk-btn trk-btn--primary">
                  Hire Me
                </Link>
              </div>
            </div>

            <div className="col-lg-7">
              <AccordionList items={serviceCards} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="overlay overlay--bottom-left" />
      <div className="services__shape">
        <span className="services__shape-item services__shape-item--1">
          <NextImage
            width={372}
            height={158}
            src="/images/icon/shape/lefttorightarrow-lg.svg"
            alt="left to right icon"
          />
        </span>
        <span className="services__shape-item services__shape-item--2">
          <NextImage
            width={64}
            height={64}
            src="/images/icon/shape/diamond-star2.svg"
            alt="diamond star icon"
          />
        </span>
      </div>
    </section>
  );
};

export default ServicesSection;
