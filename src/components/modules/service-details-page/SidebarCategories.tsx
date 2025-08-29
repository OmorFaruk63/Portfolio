import Link from "next/link";

const categories = [
  "Visual Design",
  "Mobile App Design",
  "Web Design",
  "UI/UX Design",
  "Brand Design",
  "Project Design",
];

export default function SidebarCategories() {
  return (
    <div className="sidebar__categorie">
      <div className="sidebar__head">
        <h4>Service</h4>
      </div>
      <div className="sidebar__categorie-body">
        <div className="sidebar__categorie-content">
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={`gradient-border position-relative ${
                  cat === "Mobile App Design" ? "active" : ""
                }`}
              >
                <Link href="#" className="stretched-link">
                  {cat}
                </Link>
                <span>
                  <i className="fa-solid fa-arrow-right-long" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
