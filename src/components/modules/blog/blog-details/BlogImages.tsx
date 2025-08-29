import NextImage from "@/components/common/NextImage";
import React from "react";

const BlogImages = () => (
  <div
    className="blog-details__segment"
    data-aos="fade-up"
    data-aos-duration={1000}
  >
    <div className="blog-details__segment-inner">
      <div className="blog-details__segment-item">
        <div className="row gy-4">
          <div className="col-xl-6">
            <div className="blog-details__segment-thumb">
              <NextImage
                width={307}
                height={48}
                src="/images/blog/details/2.png"
                alt="blog-image"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="blog-details__segment-thumb">
              <NextImage
                width={307}
                height={48}
                src="/images/blog/details/3.png"
                alt="blog-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogImages;
