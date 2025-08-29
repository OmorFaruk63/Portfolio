import NextImage from "@/components/common/NextImage";
import HomeTwoServicesSlider from "./HomeTwoServicesSlider";

const HomeTwoServices = () => {
  return (
    <section className="services2 padding-top padding-bottom bg-grid">
      <div className="container">
        <div
          className="section-header section-header--style2 text-center"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="subtitle">
            <span>
              <NextImage
                src="/images/icon/shape/blue-asterisk.svg"
                alt="Asterisk Icon"
                width={24}
                height={24}
              />
            </span>{" "}
            Our Services List
          </div>
          <h2>
            My <span>Specializations</span>
          </h2>
        </div>

        <HomeTwoServicesSlider />
      </div>

      <div className="overlay overlay--top-center" />
    </section>
  );
};

export default HomeTwoServices;
