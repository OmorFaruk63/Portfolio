"use client";

const slides = [
  {
    img: "/images/service/icon/web-icon.svg",
    title: "Web development",
    desc: "Building bespoke web-based tailored to specific needs or requirements.",
    href: "/services/service-details",
  },

  {
    img: "/images/service/icon/mobile-icon.svg",
    title: "Mobile development",
    desc: "Building bespoke web-based tailored to specific needs or requirements.",
    href: "/services/service-details",
  },
  {
    img: "/images/service/icon/backend-icon.svg",
    title: "Back-end Development",
    desc: "Designing and implementing the user-facing aspects of websites.",
    href: "/services/service-details",
  },
  {
    img: "/images/service/icon/backend-icon.svg",
    title: "UI/UX Design",
    desc: "Designing and implementing the user-facing aspects of websites.",
    href: "/services/service-details",
  },
];

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import NextImage from "@/components/common/NextImage";

const HomeTwoServicesSlider = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // State to track if refs are ready
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, []);

  return (
    <>
      {/* Render Swiper only when refs are ready */}
      {navReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          className="services2__slider swiper"
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map(({ img, title, desc, href }, idx) => (
            <SwiperSlide key={idx}>
              <div className="services2__item">
                <div
                  className={`services2__item-inner gradient-border ${
                    idx === 1 ? "active" : ""
                  }`}
                >
                  <div className="services2__item-wrapper">
                    <div className="services2__item-thumb">
                      <NextImage
                        width={36}
                        height={36}
                        src={img}
                        alt={`${title} icon`}
                      />
                    </div>
                    <div className="services2__item-content">
                      <h4>
                        <Link href={href}>{title}</Link>
                      </h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div className="swiper-nav swiper-nav--style1">
        <button
          ref={prevRef}
          className="swiper-nav__btn swiper-nav__btn--style2 services2__slider-prev"
          aria-label="Previous slide"
        >
          <i className="fa-solid fa-arrow-left-long" />
        </button>
        <button
          ref={nextRef}
          className="swiper-nav__btn services2__slider-next active"
          aria-label="Next slide"
        >
          <i className="fa-solid fa-arrow-right-long" />
        </button>
      </div>
    </>
  );
};

export default HomeTwoServicesSlider;
