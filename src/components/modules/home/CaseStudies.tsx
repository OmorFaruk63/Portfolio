import CaseStudiesSlider from "./CaseStudiesSlider";

export default function CaseStudies() {
  return (
    <section className="case-studies padding-top padding-bottom">
      <div className="container">
        <div className="row g-4">
          <CaseStudiesSlider />
        </div>
      </div>
      <div className="overlay overlay--bottom-left" />
    </section>
  );
}
