export default function SidebarSearch() {
  return (
    <div className="sidebar__search" data-aos="fade-up" data-aos-duration={800}>
      <h4 className="mb-15">Search Here</h4>
      <div className="sidebar__search-body">
        <form action="#">
          <div className="input">
            <input
              type="search"
              className="form-control"
              placeholder="Search articles"
              aria-label="Search articles"
            />{" "}
            <button type="submit" className="search-btn">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
