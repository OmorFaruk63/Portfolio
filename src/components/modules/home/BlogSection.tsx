import React from "react";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  tag: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Importance of User-Centered Design",
    image: "/images/blog/1.png",
    date: "June 22, 2025",
    tag: "Design",
    link: "/blogs/blog-details",
  },
  {
    id: 2,
    title: "The Role of Prototyping in UI/UX Design",
    image: "/images/blog/2.png",
    date: "June 22, 2025",
    tag: "Mission",
    link: "/blogs/blog-details",
  },
  {
    id: 3,
    title: "The Essentials of User Research in UI/UX",
    image: "/images/blog/3.png",
    date: "June 22, 2025",
    tag: "Inspiration",
    link: "/blogs/blog-details",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog padding-top padding-bottom bg-color">
      <div className="container">
        <div
          className="blog__header pb-45 d-md-flex align-items-center justify-content-between"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="section-header pb-0">
            <div className="subtitle">
              <span>
                <NextImage
                  width={33}
                  height={34}
                  src="/images/icon/sparkle.svg"
                  alt="sparkle icon"
                />
              </span>{" "}
              My Blog
            </div>
            <h2>
              Latest From <span>Blog</span>
            </h2>
          </div>
          <div className="blog__header-btn">
            <Link href="/blogs" className="trk-btn trk-btn--primary">
              View All
            </Link>
          </div>
        </div>

        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-4 gy-5 justify-content-center">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="blog__item blog__item--style1">
                  <div className="blog__item-inner">
                    <div className="blog__thumb">
                      <NextImage
                        width={374}
                        height={256}
                        src={post.image}
                        alt="blog image"
                      />
                      <span className="blog__thumb-floating">{post.date}</span>
                    </div>
                    <div className="blog__content">
                      <div className="blog__meta">
                        <span className="blog__meta-tag blog__meta-tag--style1">
                          {post.tag}
                        </span>
                      </div>
                      <h4>
                        <Link href={post.link}>{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overlay overlay--top-right" />
    </section>
  );
};

export default BlogSection;
