import Link from "next/link";
import ServiceFeatures from "./ServiceFeatures";
import ServiceImage from "./ServiceImage";
import ServiceOverview from "./ServiceOverview";
import ServiceQuotes from "./ServiceQuotes";

export default function ServiceContent() {
  return (
    <div className="service-details__item">
      <div className="service-details__item-inner">
        <ServiceImage />
        <div
          className="service-details__content"
          data-aos="fade-up"
          data-aos-duration={900}
        >
          <h2 className="mb-25">
            <Link href="/services/service-details">Mobile App Design</Link>
          </h2>
          <p>
            Welcome to the world of mobile app design, where innovation meets
            functionality to deliver seamless user experiences. Our team
            specializes in creating captivating and user-friendly mobile
            applications tailored to your unique needs.
          </p>
          <p>
            With a keen understanding of user behavior and the latest design
            trends, we strive to create visually stunning interfaces that not
            only engage users but also enhance usability. From wireframing and
            prototyping to UI design and user testing, we&apos;re with you every
            step of the way to ensure your app exceeds expectations.
          </p>
        </div>
        <ServiceQuotes />
        <ServiceFeatures />
        <ServiceOverview />
      </div>
    </div>
  );
}
