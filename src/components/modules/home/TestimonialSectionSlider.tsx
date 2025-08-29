"use client";
// This component used to be a client component, because it uses Swiper and  swiper-nav used in col-lg-4, that's why we need to keep it as a client component.
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import NextImage from "@/components/common/NextImage";

const TestimonialSectionSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const testimonials = [
    {
      img: "/images/testimonial/1.png",
      name: "Selena Brook",
      role: "StudioAC Customer",
      text: "Discover why clients love our UI/UX designs. Read their testimonials to learn how we elevate digital experit creativity, innovation, and user-centric solutions.",
    },
    {
      img: "/images/testimonial/2.png",
      name: "Esther Howard",
      role: "Envato Customer",
      text: "Discover why clients love our UI/UX designs. Read their testimonials to learn how we elevate digital experit creativity, innovation, and user-centric solutions.",
    },
  ];

  return (
    <>
      {/* Left: Title & Nav */}
      <div className="col-lg-4">
        <div
          className="testimonial__content"
          data-aos="fade-right"
          data-aos-duration={1000}
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
              Testimonial
            </div>
            <h2>
              What <span>Clients</span> Say
            </h2>
            <p>
              Their professionalism and communication the project were
              exceptional, and we look forward to with them again in the future.
            </p>
          </div>
          <div className="swiper-btn-group swiper-nav swiper-nav--style1 mt-0">
            <button
              ref={prevRef}
              className="swiper-nav__btn testimonial__slider-prev"
              aria-label="Previous Slide"
            >
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button
              ref={nextRef}
              className="swiper-nav__btn testimonial__slider-next active"
              aria-label="Next Slide"
            >
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Swiper */}
      <div className="col-lg-7">
        <div
          className="testimonial__slider swiper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              1200: { spaceBetween: 25 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={500}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial__item testimonial__item--style2">
                  <div className="testimonial__item-inner gradient-border">
                    <div className="testimonial__author">
                      <div className="testimonial__author-info">
                        <div className="testimonial__author-thumb">
                          <NextImage
                            width={48}
                            height={48}
                            src={t.img}
                            alt="author"
                          />
                        </div>
                        <div className="testimonial__author-designation">
                          <h6>{t.name}</h6>
                          <span>{t.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial__item-content">
                      <div className="testimonial__rating">
                        <ul className="five-star">
                          {[1, 2, 3, 4, 5].map((_, idx) => (
                            <li key={idx}>
                              <i className="fa-solid fa-star" />
                            </li>
                          ))}
                        </ul>
                        <div className="testimonial__quote">
                          <span>
                            <i className="fa-solid fa-quote-right" />
                          </span>
                        </div>
                      </div>
                      <p className="mb-0">{t.text}</p>
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
};

export default TestimonialSectionSlider;
