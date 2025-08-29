import NextImage from "@/components/common/NextImage";
import HomeThreeTestimonialsSlider from "./HomeThreeTestimonialsSlider";

const HomeThreeTestimonials = () => {
  return (
    <section className="testimonial padding-top padding-bottom">
      <div className="container-fluid">
        <div
          className="section-header section-header--style2 text-center"
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
            Testimonials
          </div>
          <h2>Clients Feedback</h2>
        </div>

        <div className="row g-4 justify-content-between">
          <HomeThreeTestimonialsSlider />
        </div>
      </div>
      <div className="overlay overlay--bottom-left" />
    </section>
  );
};

export default HomeThreeTestimonials;
