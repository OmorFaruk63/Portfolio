import PageHeader from "@/components/common/PageHeader";
import CaseStudiesSection from "@/components/modules/project/CaseStudiesSection";

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Projects" }]}
      />
      <CaseStudiesSection />
    </>
  );
}
