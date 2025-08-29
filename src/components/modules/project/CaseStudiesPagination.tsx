import Link from "next/link";

// components/CaseStudiesPagination.jsx
export default function CaseStudiesPagination() {
  return (
    <div className="case-studies__paginations border-top mt-45">
      <div className="paginations" data-aos="fade-up" data-aos-duration="800">
        <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1 gap-2">
          <li>
            <Link href="/project" className="gradient-border">
              <i className="fa-solid fa-angle-left me-2"></i> Prev Post
            </Link>
          </li>
          <li>
            <Link href="#" className="active">
              1
            </Link>
          </li>
          <li className="d-none d-sm-block">
            <Link href="#">2</Link>
          </li>
          <li className="d-none d-sm-block">
            <Link href="#">3</Link>
          </li>
          <li>
            <Link href="/project" className="gradient-border active">
              Next Post <i className="fa-solid fa-angle-right ms-2"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
