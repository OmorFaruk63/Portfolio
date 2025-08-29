import Link from "next/link";

export default function ProjectPagination() {
  return (
    <div className="project-details__paginations border-top mt-45">
      <div className="paginations" data-aos="fade-up" data-aos-duration={800}>
        <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1 gap-4">
          <li>
            <Link href="#" className="gradient-border">
              <i className="fa-solid fa-arrow-left-long me-2" /> Prev Post
            </Link>
          </li>
          <li>
            <Link href="#" className="gradient-border active">
              Next Post <i className="fa-solid fa-arrow-right-long ms-2" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
