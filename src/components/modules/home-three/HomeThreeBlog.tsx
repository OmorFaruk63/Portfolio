import NextImage from "@/components/common/NextImage";
import Link from "next/link";

interface BlogItem {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  comments: string;
  link: string;
  isActive?: boolean;
}

const blogs: BlogItem[] = [
  {
    id: 1,
    image: "/images/blog/9.png",
    date: "June 22, 2025",
    title: "Strategies for Improving visual accessibility",
    author: "Konal Roy",
    comments: "09 Comment",
    link: "/blogs/blog-details",
  },
  {
    id: 2,
    image: "/images/blog/10.png",
    date: "June 02, 2025",
    title: "Tips and Tricks for Successful Campaigns",
    author: "Warren",
    comments: "04 Comment",
    link: "/blogs/blog-details",
    isActive: true,
  },
  {
    id: 3,
    image: "/images/blog/11.png",
    date: "June 22, 2025",
    title: "Crafting the Compelling Content effectively",
    author: "Charlie Gx",
    comments: "17 Comment",
    link: "/blogs/blog-details",
  },
];

const BlogCard = ({ blog }: { blog: BlogItem }) => (
  <div className="col-lg-4 col-md-6">
    <div className={`blog__item blog__item--style1`}>
      <div
        className={`blog__item-inner gradient-border ${
          blog.isActive ? "active" : ""
        }`}
      >
        <div className="blog__item-wrapper">
          <div className="blog__thumb">
            <NextImage
              width={374}
              height={256}
              src={blog.image}
              alt="blog Images"
            />
            <span className="blog__thumb-floating">{blog.date}</span>
          </div>
          <div className="blog__content">
            <h4>
              <Link href={blog.link}>{blog.title}</Link>
            </h4>
            <div className="blog__content-footer d-flex justify-content-between">
              <div className="blog__content-author">
                <Link href="#">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>{" "}
                  By {blog.author}
                </Link>
              </div>
              <div className="blog__content-comment">
                <Link href="#">
                  <span>
                    <i className="fa-solid fa-comment-dots" />
                  </span>
                  {blog.comments}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HomeThreeBlog = () => {
  return (
    <section className="blog blog--style2 padding-top padding-bottom">
      <div className="container">
        <div
          className="blog__header d-md-flex align-items-center justify-content-between mb-45"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="section-header pb-0">
            <div className="subtitle">
              <span className="me-1">
                <NextImage
                  width={27}
                  height={18}
                  src="/images/icon/rectangle.svg"
                  alt="rectangle shape"
                />
              </span>{" "}
              Blog Post
            </div>
            <h2>My Blog Inside Story</h2>
          </div>
          <div className="blog__header-btn">
            <Link href="/blogs" className="trk-btn trk-btn--primary">
              View All Blog
            </Link>
          </div>
        </div>

        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="row g-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="overlay overlay--top-right" />
    </section>
  );
};

export default HomeThreeBlog;
