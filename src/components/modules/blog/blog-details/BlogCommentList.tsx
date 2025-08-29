import React from "react";
import BlogComment from "./BlogComment";

const BlogCommentList = () => (
  <div
    className="blog-details__comment"
    data-aos="fade-up"
    data-aos-duration={1000}
  >
    <div className="sidebar">
      <div className="sidebar__comment">
        <div className="sidebar__head">
          <h3>Comment</h3>
        </div>
        <div className="sidebar__comment-body">
          <ul>
            <BlogComment
              name="Etty Rakib"
              role="Product Designer"
              avatar="/images/blog/user/1.png"
              message="We invite you to explore our trading blog for the latest industry insights and expert analysis and make decisions."
              time="12 July, 2025 at 01:25pm"
            />
            <BlogComment
              classname={"border-top pt-30"}
              name="John Doe"
              role="Marketer"
              avatar="/images/blog/user/2.png"
              message="We invite you to explore our trading blog for the latest industry insights and expert analysis and make decisions."
              time="16 July, 2025 at 02:55pm"
              isReply
            />
            <BlogComment
              classname={"border-top pt-30"}
              name="Brock Wegner"
              role="Graphic Designer"
              avatar="/images/blog/user/3.png"
              message="We invite you to explore our trading blog for the latest industry insights and expert analysis and make decisions."
              time="22 July, 2025 at 01:00pm"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCommentList;
