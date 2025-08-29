import CustomCountUp from "@/components/common/Countup";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import HomeThreeAboutBtn from "./HomeThreeAboutBtn";

const HomeThreeAbout = () => {
  return (
    <>
      <section className="about about--style3 padding-top padding-bottom">
        <div className="container">
          <div
            className="section-header section-header--style2 section-header--max60 text-center d-grid justify-content-center mb-25"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="subtitle">
              <span className="me-1">
                <NextImage
                  width={27}
                  height={18}
                  src="/images/icon/rectangle.svg"
                  alt="rectangle shape"
                />
              </span>{" "}
              Explore
            </div>
            <h2>Crafting Digital Success Stories</h2>
            <p className="mt-0 mx-auto">
              As experts in marketer strategies and execution, we bring a wealth
              of experience and knowledge to the table.
            </p>
            <div className="btn-group d-flex justify-content-center gap-4 mt-45">
              <Link className="trk-btn trk-btn--primary" href="/contact">
                Let’s Work
              </Link>
              <HomeThreeAboutBtn />
            </div>
          </div>

          <div
            className="about__wrapper"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="row g-4 justify-content-center">
              {[
                { value: 2, suffix: "K", label: "Projects Completed" },
                { value: 97, suffix: "%", label: "Client Successful" },
                { value: 15, suffix: "+", label: "Years of Experience" },
                { value: 10, suffix: "+", label: "World Wide Language" },
              ].map((item, idx) => (
                <div key={idx} className="col-xl-3 col-lg-4 col-sm-6">
                  <div
                    className={`about__info gradient-border${
                      idx === 1 ? " active" : ""
                    }`}
                  >
                    <h3>
                      <CustomCountUp
                        className="purecounter"
                        start={0}
                        end={item.value}
                      />
                      {item.suffix}
                    </h3>
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay overlay--top-left" />
      </section>
    </>
  );
};

export default HomeThreeAbout;
