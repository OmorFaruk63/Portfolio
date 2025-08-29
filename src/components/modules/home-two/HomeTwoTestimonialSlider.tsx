"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import NextImage from "@/components/common/NextImage";

const HomeTwoTestimonialSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Navigation buttons will be available after mount
  }, []);

  return (
    <>
      <div className="col-12">
        <div
          className="testimonial__header d-flex justify-content-between align-items-center"
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
              What My Clients Say
            </div>
            <h2>
              Client&apos;s <span>Testimonial</span>
            </h2>
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

      <div className="col-12">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              typeof swiper.params.navigation !== "boolean" &&
              swiper.params.navigation
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="testimonial__slider2 swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="testimonial__item testimonial__item--style1">
              <div className="testimonial__item-inner gradient-border">
                <ul className="five-star">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star" />
                    </li>
                  ))}
                </ul>
                <div className="testimonial__item-content mt-30">
                  <h5>Best on the market !</h5>
                  <p className="mb-0">
                    Highlight any standout projects, presentation of work
                    samples, or areas where the portfolio
                  </p>
                  <div className="testimonial__author">
                    <div className="testimonial__author-info">
                      <div className="testimonial__author-thumb">
                        <NextImage
                          width={48}
                          height={48}
                          src="/images/testimonial/6.png"
                          alt="author"
                        />
                      </div>
                      <div className="testimonial__author-designation">
                        <h6>Rablo Heimplatz</h6>
                        <span>SEO Expert</span>
                      </div>
                    </div>
                    <div className="testimonial__quote">
                      <span>
                        <i className="fa-solid fa-quote-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial__item testimonial__item--style1">
              <div className="testimonial__item-inner gradient-border">
                <ul className="five-star">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star" />
                    </li>
                  ))}
                </ul>
                <div className="testimonial__item-content mt-30">
                  <h5>Focus on details !</h5>
                  <p className="mb-0">
                    I love this product because the support is great. Please
                    this product because the support is great
                  </p>
                  <div className="testimonial__author">
                    <div className="testimonial__author-info">
                      <div className="testimonial__author-thumb">
                        <NextImage
                          width={48}
                          height={48}
                          src="/images/testimonial/2.png"
                          alt="author"
                        />
                      </div>
                      <div className="testimonial__author-designation">
                        <h6>Stefan Stefancik</h6>
                        <span>Web Developer</span>
                      </div>
                    </div>
                    <div className="testimonial__quote">
                      <span>
                        <i className="fa-solid fa-quote-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="testimonial__item testimonial__item--style1">
              <div className="testimonial__item-inner gradient-border">
                <ul className="five-star">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star" />
                    </li>
                  ))}
                </ul>
                <div className="testimonial__item-content mt-30">
                  <h5>Response on time !</h5>
                  <p className="mb-0">
                    This can include comments on design quality, usability,
                    navigation, responsiveness, creativity, etc.
                  </p>
                  <div className="testimonial__author">
                    <div className="testimonial__author-info">
                      <div className="testimonial__author-thumb">
                        <NextImage
                          width={48}
                          height={48}
                          src="/images/testimonial/3.png"
                          alt="author"
                        />
                      </div>
                      <div className="testimonial__author-designation">
                        <h6>Anne Peres</h6>
                        <span>Web Developer</span>
                      </div>
                    </div>
                    <div className="testimonial__quote">
                      <span>
                        <i className="fa-solid fa-quote-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeTwoTestimonialSlider;
