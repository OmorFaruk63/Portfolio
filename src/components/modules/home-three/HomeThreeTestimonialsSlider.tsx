"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import NextImage from "@/components/common/NextImage";

const testimonials = [
  {
    stars: 5,
    title: "Best on the market !",
    description:
      "Highlight any standout projects, presentation of work samples, or areas where the portfolio",
    name: "Rablo Heimplatz",
    role: "SEO Expert",
    image: "/images/testimonial/6.png",
  },
  {
    stars: 5,
    title: "focus on details !",
    description:
      "I love this product because the support is great. Please this product because the support is great",
    name: "Stefan Stefancik",
    role: "Web Developer",
    image: "/images/testimonial/2.png",
  },
  {
    stars: 5,
    title: "Response on time !",
    description:
      "This can include comments on design quality, usability, navigation, responsiveness, creativity, etc.",
    name: "Anne Peres",
    role: "Web Developer",
    image: "/images/testimonial/3.png",
  },
  {
    stars: 5,
    title: "focus on details !",
    description:
      "I love this product because the support is great. Please this product because the support is great",
    name: "Stefan Stefancik",
    role: "Web Developer",
    image: "/images/testimonial/2.png",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="testimonial__item testimonial__item--style1">
    <div className="testimonial__item-inner gradient-border">
      <ul className="five-star">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <li key={i}>
            <i className="fa-solid fa-star" />
          </li>
        ))}
      </ul>
      <div className="testimonial__item-content mt-30">
        <h5>{testimonial.title}</h5>
        <p className="mb-0">{testimonial.description}</p>
        <div className="testimonial__author">
          <div className="testimonial__author-info">
            <div className="testimonial__author-thumb">
              <NextImage
                width={48}
                height={48}
                src={testimonial.image}
                alt="author"
              />
            </div>
            <div className="testimonial__author-designation">
              <h6>{testimonial.name}</h6>
              <span>{testimonial.role}</span>
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
);

const HomeThreeTestimonialsSlider = () => {
  return (
    <div className="col-12">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={{
          nextEl: ".testimonial__slider-next",
          prevEl: ".testimonial__slider-prev",
        }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="testimonial__slider3"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeThreeTestimonialsSlider;
