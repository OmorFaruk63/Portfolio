import HomeTwoCaseStudiesSlider from "./HomeTwoCaseStudiesSlider";

const HomeTwoCaseStudies: React.FC = () => {
  return (
    <section className="case-studies padding-top padding-bottom">
      <div className="container">
        <HomeTwoCaseStudiesSlider />
      </div>

      {/* Overlay */}
      <div className="overlay overlay--top-left" />
    </section>
  );
};

export default HomeTwoCaseStudies;
