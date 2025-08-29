import CaseStudiesGrid from "./CaseStudiesGrid";
import CaseStudiesPagination from "./CaseStudiesPagination";

export default function CaseStudiesSection() {
  return (
    <section className="case-studies padding-top padding-bottom">
      <div className="container">
        <div className="case-studies__wrapper">
          <CaseStudiesGrid />
        </div>
        <CaseStudiesPagination />
      </div>
      <div className="overlay overlay--bottom-left"></div>
    </section>
  );
}
