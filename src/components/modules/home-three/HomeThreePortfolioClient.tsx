"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";

// Sample data
const initialPortfolioItems = [
  {
    id: 1,
    img: "/images/portfolio/1.png",
    tag: "Data Analysis",
    title: "Data Analysis News",
  },
  {
    id: 2,
    img: "/images/portfolio/2.png",
    tag: "Content Writing",
    title: "Email Marketing Tips",
  },
  {
    id: 3,
    img: "/images/portfolio/3.png",
    tag: "Marketing",
    title: "Social Media Marketing",
  },
];

// Utility to shuffle array
const shuffleArray = (array: typeof initialPortfolioItems) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const tabs = ["Marketing", "SEO", "Digital", "Content Writing", "Agency"];

const HomeThreePortfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);
  const [activeTab, setActiveTab] = useState("Marketing");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const shuffled = shuffleArray(initialPortfolioItems);
    setPortfolioItems(shuffled);
  };

  return (
    <>
      <div
        className="portfolio__header gap-4"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="section-header">
          <div className="subtitle">
            <span className="me-1">
              <NextImage
                width={27}
                height={18}
                src="/images/icon/rectangle.svg"
                alt="rectangle shape"
              />
            </span>{" "}
            Portfolio
          </div>
          <h2>My Portfolio of Success</h2>
        </div>
        <div className="portfolio__header-action">
          <ul className="nav nav-pills mb-3 gap-3" role="tablist">
            {tabs.map((tab) => (
              <li className="nav-item" role="presentation" key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="portfolio__wrapper"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="row g-4 justify-content-center">
          {portfolioItems.map(({ id, img, tag, title }) => (
            <div className="col-lg-4 col-md-6" key={id}>
              <div className="portfolio__item">
                <div className="portfolio__item-inner">
                  <div className="portfolio__item-thumb">
                    <NextImage
                      width={454}
                      height={340}
                      src={img}
                      alt="Portfolio"
                    />
                  </div>
                  <div className="portfolio__item-content">
                    <div className="portfolio__meta">
                      <span className="portfolio__meta-tag">{tag}</span>
                    </div>
                    <h4>
                      <Link href="/project/project-details">{title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeThreePortfolio;
