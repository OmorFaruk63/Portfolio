"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const HomeTwoPartnerSwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={24}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
      }}
      speed={2000}
      slidesPerView={2}
      breakpoints={{
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5, spaceBetween: 15 },
        1200: { slidesPerView: 7, spaceBetween: 25 },
      }}
      className="partner__slider"
    >
      {[1, 2, 3, 4, 5, 6, 7, 3].map((num, i) => (
        <SwiperSlide key={i}>
          <div className="partner__item">
            <div className="partner__item-inner">
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`/images/partner/home2/${num}.png`}
                  alt={`partner ${num}`}
                  className="dark"
                />
              }
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeTwoPartnerSwiper;
