import Link from "next/link";
import React from "react";

const BlogMeta = () => (
  <div className="blog-details__meta">
    <ul>
      <li>
        <Link href="#">
          <i className="fa-regular fa-circle-user" />
          Alex Williams
        </Link>
      </li>
      <li>
        <Link href="#">
          <i className="fa-regular fa-calendar-check" /> April 25, 2025
        </Link>
      </li>
      <li>
        <Link href="#">
          <i className="fa-regular fa-comment" /> 4 Comments
        </Link>
      </li>
    </ul>
  </div>
);

export default BlogMeta;
