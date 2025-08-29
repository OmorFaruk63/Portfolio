import Link from "next/link";

// components/SidebarTags.jsx
const tags = [
  "E-commerce",
  "Landing Pages",
  "Finance",
  "iOS App Design",
  "Logo Desing",
  "Visual Design",
  "Web Applications",
];

export default function SidebarTags() {
  return (
    <div className="sidebar__tags">
      <div className="sidebar__head">
        <h4>Categories</h4>
      </div>
      <div className="sidebar__tags-body">
        <div className="tags">
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <Link href="#" className={tag === "E-commerce" ? "active" : ""}>
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
