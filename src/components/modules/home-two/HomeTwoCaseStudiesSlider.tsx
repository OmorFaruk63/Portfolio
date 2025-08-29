"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";

const slides = [
  {
    image: "/images/case-studies/home2/1.png",
    tag: "Mobile App Design",
    title: "LMS Digital Mobile Project",
    link: "/project/project-details",
    tagStyle: "blog__meta-tag--style1",
    thumbClass: "",
  },
  {
    image: "/images/case-studies/home2/2.png",
    tag: "Portfolio Website",
    title: "Creative Photographer Portfolio Website",
    link: "/project/project-details",
    tagStyle: "case-studies__meta-tag--style1",
    thumbClass: "active",
  },
  {
    image: "/images/case-studies/home2/3.png",
    tag: "IOS App Design",
    title: "Barber Shop Booking App",
    link: "/project/project-details",
    tagStyle: "blog__meta-tag--style1",
    thumbClass: "",
  },
];

const HomeTwoCaseStudiesSlider: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div
        className="case-studies__header pb-45 d-flex justify-content-between"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="section-header section-header--style2 pb-0">
          <div className="subtitle">
            <span>
              <NextImage
                src="/images/icon/shape/blue-asterisk.svg"
                alt="Asterisk Icon"
                width={24}
                height={24}
              />
            </span>{" "}
            Explore
          </div>
          <h2>
            Recent Work <span>Portfolio</span>
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="swiper-btn-group swiper-nav swiper-nav--style1">
          <button
            className="swiper-nav__btn case-studies__slider-prev"
            aria-label="Previous Slide"
          >
            <i className="fa-solid fa-arrow-left-long" />
          </button>
          <button
            className="swiper-nav__btn case-studies__slider-next active"
            aria-label="Next Slide"
          >
            <i className="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <div
        className="case-studies__slider2"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          grabCursor={true}
          loop={true}
          speed={500}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".case-studies__slider-next",
            prevEl: ".case-studies__slider-prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {/* Slide 1 */}
          {slides.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="case-studies__item">
                <div className="case-studies__item-inner">
                  <div className="case-studies__item-thumb">
                    <NextImage
                      width={573}
                      height={428}
                      src={data.image}
                      alt="Case Studies Images"
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
                        {data.tag}
                      </span>
                    </div>
                    <h4>
                      <Link href="/project/project-details">{data.title}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeTwoCaseStudiesSlider;
