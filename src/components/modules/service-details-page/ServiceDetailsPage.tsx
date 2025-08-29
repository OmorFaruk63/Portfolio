import ServiceContent from "./ServiceContent";
import Sidebar from "./Sidebar";

export default function ServiceDetailsPage() {
  return (
    <section className="service-details padding-top padding-bottom">
      <div className="container">
        <div className="service-details__wrapper">
          <div className="row flex-lg-row-reverse g-5">
            <div className="col-lg-8">
              <ServiceContent />
            </div>
            <div className="col-lg-4 col-md-8 col-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
