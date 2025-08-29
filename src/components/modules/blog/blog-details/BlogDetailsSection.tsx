import React from "react";
import BlogContent from "./BlogContent";
import BlogImages from "./BlogImages";
import BlogExtraContent from "./BlogExtraContent";
import BlogCommentList from "./BlogCommentList";
import BlogCommentForm from "./BlogCommentForm";
import NextImage from "@/components/common/NextImage";

const BlogDetailsSection = () => (
  <div className="col-lg-8">
    <div className="blog-details__item">
      <div className="blog-details__item-inner">
        <div className="blog-details__thumb">
          <div
            className="blog-details__thumb-inner"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <NextImage
              width={653}
              height={356}
              src="/images/blog/details/1.png"
              alt="blog-image"
            />
          </div>
        </div>
        <BlogContent />
        <BlogImages />
        <BlogExtraContent />
      </div>
    </div>
    <div className="blog-details__item">
      <BlogCommentList />
    </div>
    <div className="blog-details__item">
      <div className="blog-details__item">
        <div
          className="blog-details__commentform"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="sidebar">
            <div className="sidebar__commentform" id="post">
              <div className="sidebar__head">
                <h3>Leave A Comment</h3>
              </div>
              <div className="sidebar__commentform-body pt-25">
                <BlogCommentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogDetailsSection;
