import Link from "next/link";
import React from "react";

interface Breadcrumb {
  name: string;
  href?: string; // optional, no link if it's the current page
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="page-header bg-grid">
      <div className="container">
        <div
          className="page-header__content"
          data-aos="fade-right"
          data-aos-duration={1000}
        >
          <h2>{title}</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              {breadcrumbs.map((item, idx) => (
                <li
                  key={idx}
                  className={`breadcrumb-item${!item.href ? " active" : ""}`}
                  aria-current={!item.href ? "page" : undefined}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
      <div className="overlay overlay--left-center" />
      <div className="overlay overlay--right-center" />
    </section>
  );
};

export default PageHeader;
