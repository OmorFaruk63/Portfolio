"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";

const caseStudiesData = [
  {
    img: "/images/case-studies/home1/1.png",
    tag: "Evolvify UX Agency",
    title: "Dashboard Branding",
    link: "/project/project-details",
  },
  {
    img: "/images/case-studies/home1/2.png",
    tag: "Restaurants Design",
    title: "Italian food website",
    link: "/project/project-details",
  },
  {
    img: "/images/case-studies/home1/3.png",
    tag: "Mobile Apps",
    title: "Banking Apps",
    link: "/project/project-details",
  },
];

export default function CaseStudiesSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="col-lg-5">
        <div
          className="case-studies__content"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="section-header">
            <div className="subtitle">
              <span>
                <NextImage
                  width={33}
                  height={34}
                  src="/images/icon/sparkle.svg"
                  alt="sparkle icon"
                />
              </span>{" "}
              Explore
            </div>
            <h2>
              Explore our Latest <span>Case Studies</span>
            </h2>
            <p>
              Experience excellence with our UI/UX. From user research to
              seamless design implementation.
            </p>
          </div>

          <div className="swiper-btn-group swiper-nav swiper-nav--style1 mt-0">
            <button
              ref={prevRef}
              className="swiper-nav__btn case-studies__slider-prev"
              aria-label="Previous Slide"
            >
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button
              ref={nextRef}
              className="swiper-nav__btn case-studies__slider-next active"
              aria-label="Next Slide"
            >
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-7">
        <div
          className="case-studies__slider"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={500}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {caseStudiesData.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="case-studies__item">
                  <div className="case-studies__item-inner">
                    <div className="case-studies__item-thumb">
                      <NextImage
                        width={356}
                        height={312}
                        src={study.img}
                        alt={study.title}
                      />
                      <div className="case-studies__buttons">
                        <Link
                          href={study.link}
                          className="trk-btn trk-btn--primary mt-3"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                    <div className="case-studies__item-content">
                      <div className="case-studies__meta">
                        <span className="case-studies__meta-tag blog__meta-tag--style1">
                          {study.tag}
                        </span>
                      </div>
                      <h4>
                        <Link href={study.link}>{study.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
