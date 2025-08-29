import PageHeader from "@/components/common/PageHeader";
import ProjectDetailsSection from "@/components/modules/project/project-details-section/ProjectDetailsSection";

export default function ProjectDetailsPage() {
  return (
    <>
      <PageHeader
        title="Project Details"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Project Details" }]}
      />
      <>
        {/* ===============>> Project details section start here <<================= */}
        <ProjectDetailsSection />
        {/* ===============>> Service section start here <<================= */}
      </>
    </>
  );
}
