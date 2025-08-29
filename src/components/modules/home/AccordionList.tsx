"use client";

import { useState, useRef } from "react";
import Link from "next/link";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export default function AccordionList({ items }: { items: AccordionItem[] }) {
  const [activeId, setActiveId] = useState<string | null>("faq2");
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="services__list accordion" id="servicesAccordion">
      {items.map(({ id, title, content }) => {
        const isActive = activeId === id;
        return (
          <div
            key={id}
            className="services__list-item accordion-item gradient-border"
          >
            <div className="services__list-title d-flex accordion-header">
              <button
                className={`accordion-button ${isActive ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleAccordion(id)}
                aria-expanded={isActive}
                aria-controls={id}
              >
                <span className="service-card__title mb-0">{title}</span>
              </button>
              <Link
                href="/services/service-details"
                className="services__list-btn"
                aria-label="View Service Details"
              >
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>

            <div
              id={id}
              className={`accordion-collapse ${
                isActive ? "collapse show" : ""
              }`}
              style={{
                maxHeight:
                  isActive && contentRefs.current[id]?.scrollHeight
                    ? `${contentRefs.current[id]!.scrollHeight}px`
                    : "0px",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
              ref={(el) => {
                contentRefs.current[id] = el;
              }}
              aria-hidden={!isActive}
            >
              <div className="accordion-body">
                <p>{content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
