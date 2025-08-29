"use client";
import Link from "next/link";
import React, { useState } from "react";

const BlogSidebarClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Visual Design");
  const [activeTag, setActiveTag] = useState<string>("Design");

  const categories = [
    { name: "Visual Design", count: 0 },
    { name: "User Research", count: 7 },
    { name: "UI/UX Design", count: 3 },
    { name: "Mobile Design", count: 1 },
  ];

  const tags = [
    "Design",
    "Business",
    "Creative",
    "Personal",
    "Modern",
    "One Page",
    "Photography",
  ];

  return (
    <>
      <div className="col-12">
        <div className="sidebar__categorie">
          <div className="sidebar__head">
            <h6>Categories</h6>
          </div>
          <div className="sidebar__categorie-body">
            <ul>
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`gradient-border ${
                    activeCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <Link href="/blogs/blog-details">{category.name}</Link>
                  <span>({category.count.toString().padStart(2, "0")})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="col-12">
        <div className="sidebar__tags">
          <div className="sidebar__head">
            <h6>Popular Tag</h6>
          </div>
          <div className="sidebar__tags-body">
            <div className="tags">
              <ul>
                {tags.map((tag) => (
                  <li key={tag} onClick={() => setActiveTag(tag)}>
                    <span className={activeTag === tag ? "active" : ""}>
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebarClient;
