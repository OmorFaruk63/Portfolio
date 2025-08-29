// components/ServiceQuotes.jsx
export default function ServiceQuotes() {
  return (
    <div
      className="service-details__quotes mt-55"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="service-details__quotes-content">
        <h6>
          Our team of UI/UX experts conducts a thorough evaluation o the
          submitted element, analyzing its usability, functionality, visual
          design, and overall user experience.
        </h6>
      </div>
      <div className="service-details__quotes-author">
        <img src="/images/service/author.png" alt="person image" />
        <h6>Lrene Strong</h6>
      </div>
    </div>
  );
}
