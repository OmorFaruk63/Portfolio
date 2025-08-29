import HomeTwoTestimonialSlider from "./HomeTwoTestimonialSlider";

const HomeTwoTestimonialSection = () => {
  return (
    <section className="testimonial padding-top padding-bottom">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <HomeTwoTestimonialSlider />
        </div>
      </div>
      <div className="overlay overlay--bottom-left" />
    </section>
  );
};

export default HomeTwoTestimonialSection;
