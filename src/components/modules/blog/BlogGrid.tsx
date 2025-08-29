import React from "react";
import BlogItem from "./BlogItem";

const blogs = [
  {
    image: "/images/blog/1.png",
    date: "June 22, 2025",
    category: "Design",
    title: "The Importance of User-Centered Design",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/2.png",
    date: "February 09, 2025",
    category: "Development",
    title: "How to code successfully to access for everyone",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/3.png",
    date: "June 22, 2025",
    category: "Business",
    title: "Strategies for Creating a Smooth User Journey",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/4.png",
    date: "March 27, 2025",
    category: "Interaction",
    title: "Tips for Creating Stunning UI Mockups",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/5.png",
    date: "July 20, 2025",
    category: "Design",
    title: "Designing Inclusive Interfaces for All Users",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/6.png",
    date: "May 29, 2025",
    category: "Business",
    title: "How to Design Products with Understanding",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/7.png",
    date: "June 07, 2025",
    category: "Research",
    title: "Crafting Compelling User Journeys",
    link: "/blogs/blog-details",
  },
  {
    image: "/images/blog/8.png",
    date: "April 02, 2025",
    category: "UI/UX Design",
    title: "Ensuring Accessibility for Users of All Abilities",
    link: "/blogs/blog-details",
  },
];

const BlogGrid: React.FC = () => {
  return (
    <div className="row g-4 gy-5">
      {blogs.map((blog, idx) => (
        <BlogItem key={idx} {...blog} />
      ))}
    </div>
  );
};

export default BlogGrid;
