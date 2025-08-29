import NextImage from "@/components/common/NextImage";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Tips for Creating Mobile Friendly Websites",
    category: "Technology",
    image: "/images/blog/1.png",
    date: "15 March 2025",
    link: "/blogs/blog-details",
  },
  {
    id: 2,
    title: "Tips for Creating Mobile Friendly Websites",
    category: "Technology",
    image: "/images/blog/2.png",
    date: "06 March 2025",
    link: "/blogs/blog-details",
  },
  {
    id: 3,
    title: "Tips for Creating Mobile Friendly Websites",
    category: "Technology",
    image: "/images/blog/3.png",
    date: "1 March 2025",
    link: "/blogs/blog-details",
  },
];

const HomeTwoBlogSection = () => {
  return (
    <section className="blog blog--style2 padding-top padding-bottom">
      <div className="container">
        {/* Header */}
        <div
          className="blog__header d-md-flex align-items-center justify-content-between"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="section-header section-header--style2">
            <div className="subtitle">
              <span>
                <NextImage
                  src="/images/icon/shape/blue-asterisk.svg"
                  alt="Asterisk Icon"
                  width={24}
                  height={24}
                />
              </span>{" "}
              News &amp; Articles
            </div>
            <h2>
              My Recent <span>Articles</span>
            </h2>
          </div>
          <div className="blog__header-btn">
            <Link href="/blogs" className="trk-btn trk-btn--primary">
              View Blogs
            </Link>
          </div>
        </div>

        {/* Blog Items */}
        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-4 justify-content-center">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="blog__item">
                  <div className="blog__item-inner">
                    <div className="blog__thumb">
                      <NextImage
                        width={374}
                        height={256}
                        src={post.image}
                        alt="blog Images"
                      />
                      <span className="blog__thumb-floating">
                        {post.category}
                      </span>
                    </div>
                    <div className="blog__content">
                      <h4>
                        <Link href={post.link}>{post.title}</Link>
                      </h4>
                      <div className="blog__content-footer d-flex justify-content-between">
                        <Link href={post.link} className="text-btn">
                          Read more
                        </Link>
                        <span>{post.date}</span>
                      </div>
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

export default HomeTwoBlogSection;
