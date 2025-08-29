import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";

interface BlogItemProps {
  image: string;
  date: string;
  category: string;
  title: string;
  link: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  date,
  category,
  title,
  link,
}) => {
  return (
    <div className="col-sm-6">
      <div className="blog__item blog__item--style1">
        <div className="blog__item-inner">
          <div className="blog__thumb">
            <NextImage width={374} height={256} src={image} alt="blog Images" />
          
            <span className="blog__thumb-floating">{date}</span>
          </div>
          <div className="blog__content">
            <div className="blog__meta">
              <span className="blog__meta-tag blog__meta-tag--style1">
                {category}
              </span>
            </div>
            <h4>
              <Link href={link}>{title}</Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
