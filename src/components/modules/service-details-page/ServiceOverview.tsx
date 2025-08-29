// components/ServiceOverview.jsx
const list1 = [
  "User-Centric Design",
  "Attention to Detail",
  "Continuous Learning",
];

const list2 = [
  "Usability Testing",
  "Staying Agile",
  "Accessibility and Inclusivit",
];

export default function ServiceOverview() {
  return (
    <div className="service-details__content">
      <p className="mb-40">
        Our approach combines creativity with technical expertise to bring your
        app ideas to life. Whether you&apos;re launching a new app or
        redesigning an existing one, we&apos;ll work closely with you to
        understand your vision and deliver.
      </p>
      <h3 className="mb-15">Overview</h3>
      <p className="mb-40">
        Welcome to our UI/UX design service overview. We specialize in crafting
        seamless and intuitive digital experiences that captivate users and
        drive business success
      </p>
      <h3 className="mb-15">Overview</h3>
      <div className="row">
        {[list1, list2].map((list, idx) => (
          <div className="col-lg-6" key={idx}>
            <ul className="service-details-list">
              {list.map((item) => (
                <li key={item}>
                  <span>
                    <img src="/images/icon/fill-arrow.svg" alt="arrow icon" />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
