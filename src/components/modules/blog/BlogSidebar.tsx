import Link from "next/link";
import BlogSidebarClient from "./BlogSidebarClient";

const BlogSidebar: React.FC = () => {
  return (
    <div className="sidebar" data-aos="fade-left" data-aos-duration="1000">
      <div className="row g-4">
        <div className="col-12">
          <div className="sidebar__search">
            <h6 className="mb-15">Search Here</h6>
            <div className="sidebar__search-body">
              <form>
                <div className="input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search articles"
                  />
                  <button type="submit" className="search-btn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <BlogSidebarClient />

        {/* CTA */}
        <div className="col-12">
          <div className="sidebar__cta">
            <h3>Torkfolio</h3>
            <h5>CONTACT ME NOW</h5>
            <h4>(+089) 934 71 45 23</h4>
            <Link className="trk-btn trk-btn--primary" href="/contact">
              Let’s Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
