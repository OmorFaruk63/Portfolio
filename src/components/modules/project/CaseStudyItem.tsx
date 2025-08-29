import NextImage from "@/components/common/NextImage";
import Link from "next/link";

type CaseStudyItemProps = {
  image: string;
  tag: string;
  title: string;
};
// components/CaseStudyItem.jsx
const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ image, tag, title }) => {
  return (
    <div className="case-studies__item">
      <div className="case-studies__item-inner">
        <div className="case-studies__item-thumb">
          <NextImage
            width={374}
            height={286}
            src={image}
            alt="Project Images"
          />
          <div className="case-studies__buttons">
            <Link
              href="/project/project-details"
              className="trk-btn trk-btn--primary mt-3"
            >
              View Project
            </Link>
          </div>
        </div>
        <div className="case-studies__item-content">
          <div className="case-studies__meta">
            <span className="case-studies__meta-tag blog__meta-tag--style1">
              {tag}
            </span>
          </div>
          <h4>
            <Link href="/project/project-details">{title}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default CaseStudyItem;
