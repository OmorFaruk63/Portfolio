import NextImage from "@/components/common/NextImage";

export default function ServiceFeatures() {
  return (
    <div className="service-details__feature mt-50 mb-25">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="service-details__feature-thumb">
            <NextImage
              width={299}
              height={264}
              src="/images/service/details/2.png"
              alt="service images"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="service-details__feature-list">
            <h3 className="mb-15">Service Features</h3>
            <p className="mb-25">
              Our UI/UX design services are tailored to deliver exceptional
              digital.
            </p>
            <ul className="service-details-list">
              {[
                "User-Centric Approach",
                "Strategic Design Thinking",
                "Visual Design Excellence",
              ].map((item) => (
                <li key={item}>
                  <span>
                    <img src="/images/icon/fill-arrow.svg" alt="arrow icon" />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
