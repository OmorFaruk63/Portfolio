import TestimonialSectionSlider from "./TestimonialSectionSlider";

const TestimonialSection = () => {
  return (
    <section className="testimonial padding-top padding-bottom">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <TestimonialSectionSlider />
        </div>
      </div>
      <div className="overlay overlay--bottom-left" />
    </section>
  );
};

export default TestimonialSection;
