import NextImage from "@/components/common/NextImage";
import Link from "next/link";
import React from "react";

interface CommentProps {
  name: string;
  role: string;
  avatar: string;
  message: string;
  time: string;
  classname?: string;
  isReply?: boolean;
}

const BlogComment: React.FC<CommentProps> = ({
  name,
  role,
  avatar,
  message,
  time,
  isReply,
  classname = "",
}) => (
  <li
    className={`sidebar__comment-item ${classname}  ${
      isReply ? "sidebar__comment-item--reply" : ""
    }`}
  >
    <div className="comment">
      <div className="comment__inner">
        <div className="comment__head gap-3">
          <div className="comment__author">
            <div className="comment__author-thumb">
              <NextImage
                width={48}
                height={48}
                src={avatar}
                alt="comment-author"
              />
            </div>
            <div className="comment__author-info">
              <h6 className="mb-0">{name}</h6>
              <span>{role}</span>
            </div>
          </div>
          <div className="comment__action">
            <Link href="#post">
              <i className="fa-solid fa-reply" /> reply
            </Link>
          </div>
        </div>
        <div className="comment__body">
          <div className="comment__body-inner">
            <p className={isReply ? "mt-15" : ""}>{message}</p>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default BlogComment;
