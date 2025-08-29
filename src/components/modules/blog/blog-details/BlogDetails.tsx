import React from "react";
import BlogSidebar from "../BlogSidebar";
import BlogDetailsSection from "./BlogDetailsSection";

const BlogDetails = () => {
  return (
    <section className="blog-details padding-top padding-bottom">
      <div className="container">
        <div className="blog-details__wrapper">
          <div className="row g-5">
            <BlogDetailsSection />
            <div className="col-lg-4 col-md-8  col-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
