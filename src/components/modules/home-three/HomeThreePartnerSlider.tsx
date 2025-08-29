"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [1, 2, 3, 4, 5, 3];

const HomeThreePartnerSlider = () => {
  return (
    <div
      className="partner__wrapper"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        grabCursor
        loop
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        slidesPerView={2}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 4, spaceBetween: 15 },
          1200: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="partner__slider2"
      >
        {logos.map((id, i) => (
          <SwiperSlide key={i}>
            <div className="partner__item">
              <div className="partner__item-inner">
                <img
                  src={`/images/partner/home3/${id}.png`}
                  alt="partner logo"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeThreePartnerSlider;
