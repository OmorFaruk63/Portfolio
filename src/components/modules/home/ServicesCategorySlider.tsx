"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import NextImage from "@/components/common/NextImage";

const services = [
  "UX Design",
  "Wireframe",
  "Art Design",
  "Dashboard",
  "App Design",
  "Mobile App",
  "Art Design",
];

export default function ServicesCategorySlider() {
  return (
    <Swiper
      className="services-category__slider"
      spaceBetween={24}
      loop
      grabCursor={true}
      slidesPerView={2}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      modules={[Autoplay]}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="services-category__item">
            <span className="services-category__item-icon">
              <NextImage
                src="/images/icon/shape/blue-asterisk.svg"
                alt="Asterisk Icon"
                width={24}
                height={24}
              />
            </span>
            <h5>{service}</h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
