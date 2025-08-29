"use client";

import { useState } from "react";
import NextImage from "@/components/common/NextImage";
import Link from "next/link";

const pricingFeatures = [
  " UI UX Design",
  " Design Customization",
  " Design with Figma",
  " Multipage Design",
  " Support 6 months",
];

const pricingData = {
  onDemand: {
    monthly: { value: 20, suffix: "/Hourly" },
    yearly: { value: 15, suffix: "/Hourly" },
  },
  fullTime: {
    monthly: { value: 3000, suffix: "/Monthly" },
    yearly: { value: 2250, suffix: "/Monthly" },
  },
  partTime: {
    monthly: { value: 1000, suffix: "/Monthly (Minimum)" },
    yearly: { value: 750, suffix: "/Monthly (Minimum)" },
  },
};

const PricingCard = ({
  title,
  value,
  suffix,
  active = false,
  badge,
  shape,
}: {
  title: string;
  value: number;
  suffix: string;
  active?: boolean;
  badge?: string;
  shape?: boolean;
}) => (
  <div className="col-md-6 col-lg-4">
    <div
      className="pricing__item"
      data-aos="fade-right"
      data-aos-duration={1000}
    >
      <div
        className={`pricing__item-inner gradient-border ${
          active ? "active" : ""
        }`}
      >
        <div className="pricing__item-content">
          <div className="pricing__item-top pricing__item-top--style2 pb-0">
            <h6 className="mb-15">{title}</h6>
            <h3 className="mb-25">
              ${value.toLocaleString()}
              <span>{suffix}</span>
            </h3>
            {badge && (
              <div className="pricing__item-badge pricing__item-badge--style2">
                <span>{badge}</span>
              </div>
            )}
            {shape && (
              <div className="pricing__item-shape">
                <NextImage
                  width={66}
                  height={47}
                  src="/images/icon/sparkle-highlight.svg"
                  alt="Loop arrow image"
                />
              </div>
            )}
          </div>

          <div className="pricing__list">
            <ul>
              {pricingFeatures.map((feature, idx) => (
                <li key={idx} className="pricing__list-item">
                  <span>
                    <NextImage
                      width={24}
                      height={24}
                      src="/images/icon/border-arrow.svg"
                      alt="border arrow"
                    />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing__item-btn mt-40">
            <Link
              href="/register"
              className={`trk-btn trk-btn--outline ${
                active ? "active" : ""
              } text-center w-100`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PricingClientSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <div
        className="pricing__header d-flex flex-wrap align-items-center justify-content-between mb-45"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="section-header pb-0">
          <div className="subtitle">
            <span className="me-1">
              <NextImage
                width={27}
                height={18}
                src="/images/icon/rectangle.svg"
                alt="rectangle shape"
              />
            </span>{" "}
            Pricing Plan
          </div>
          <h2>Plans For Everyone</h2>
        </div>
        <div className="pricing__toggle d-flex align-items-center justify-content-end gap-3">
          <span className="pricing-label">Monthly</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={(e) => setIsYearly(e.target.checked)}
              type="checkbox"
              role="switch"
              id="pricingToggle"
            />
            <label className="form-check-label" htmlFor="pricingToggle" />
          </div>
          <span className="pricing-label">
            Yearly <span className="savings-badge">(Save 25%)</span>
          </span>
        </div>
      </div>

      <div className="pricing__wrapper">
        <div className="row g-4 align-items-center justify-content-center">
          <PricingCard
            title="On Demand"
            value={
              isYearly
                ? pricingData.onDemand.yearly.value
                : pricingData.onDemand.monthly.value
            }
            suffix={
              isYearly
                ? pricingData.onDemand.yearly.suffix
                : pricingData.onDemand.monthly.suffix
            }
          />
          <PricingCard
            title="Full Time"
            value={
              isYearly
                ? pricingData.fullTime.yearly.value
                : pricingData.fullTime.monthly.value
            }
            suffix={
              isYearly
                ? pricingData.fullTime.yearly.suffix
                : pricingData.fullTime.monthly.suffix
            }
            active
            badge="Recommended"
            shape
          />
          <PricingCard
            title="Part Time"
            value={
              isYearly
                ? pricingData.partTime.yearly.value
                : pricingData.partTime.monthly.value
            }
            suffix={
              isYearly
                ? pricingData.partTime.yearly.suffix
                : pricingData.partTime.monthly.suffix
            }
          />
        </div>
      </div>
    </>
  );
};

export default PricingClientSection;
