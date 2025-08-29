import CustomCountUp from "@/components/common/Countup";

export default function ProjectResults() {
  return (
    <div className="row g-4">
      <div className="col-xl-4 col-sm-6">
        <h5>
          <CustomCountUp start={90} end={119} />%
        </h5>
        <span>Months Project Duration</span>
      </div>
      <div className="col-xl-4 col-sm-6">
        <h5>
          <CustomCountUp start={30} end={55} />%
        </h5>
        <span>Average daily signups</span>
      </div>
      <div className="col-xl-4 col-sm-6">
        <h5>
          <CustomCountUp start={400} end={499} />+
        </h5>
        <span>Growth After Work</span>
      </div>
    </div>
  );
}
