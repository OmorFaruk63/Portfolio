import React from "react";
import BlogGrid from "./BlogGrid";
import BlogSidebar from "./BlogSidebar";
import ProjectPagination from "../project/project-details-section/ProjectPagination";

const BlogSection: React.FC = () => {
  return (
    <section className="blog padding-top padding-bottom">
      <div className="container">
        <div className="blog__wrapper">
          <div className="row g-5">
            <div className="col-lg-8">
              <BlogGrid />
              <ProjectPagination />
            </div>
            <div className="col-lg-4 col-md-8 col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
