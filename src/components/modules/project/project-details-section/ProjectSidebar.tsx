import ProjectInfoCard from "./ProjectInfoCard";

export default function ProjectSidebar() {
  return (
    <div className="sidebar">
      <div className="row g-4">
        <div className="col-12">
          <ProjectInfoCard
            title="Project Info"
            info={[
              ["Project", "Restaurant Design"],
              ["Architect", "Residential"],
              ["Clients", "Jonas Kakaroto"],
              ["Duration", "05 Months"],
              ["Budget", "$900.99"],
              ["Location", "Banff Nation Park"],
            ]}
          />
        </div>
        <div className="col-12">
          <ProjectInfoCard
            title="Need Your Help?"
            info={[
              ["Contact", "+ (324) 750 - 1475"],
              ["Email", "torkfolio@example"],
              ["Location", "Banff G-Lane, USA"],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
