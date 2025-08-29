import ProjectDetailsContent from "./ProjectDetailsContent";
import ProjectSidebar from "./ProjectSidebar";

export default function ProjectDetailsSection() {
  return (
    <section className="project-details padding-top padding-bottom">
      <div className="container">
        <div className="project-details__wrapper">
          <div className="row g-5">
            <div className="col-lg-8">
              <ProjectDetailsContent />
            </div>
            <div className="col-lg-4 col-md-8 col-12">
              <ProjectSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
